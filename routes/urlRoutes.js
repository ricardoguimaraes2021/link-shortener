const express = require('express');
const router = express.Router();
const Url = require('../models/urlModel'); // Import URL model

// Route to shorten a URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body; // Extract the original URL from the request body
  try {
    // Check if the URL already exists in the database
    let url = await Url.findOne({ originalUrl });
    
    if (url) {
      // If URL already exists, return it
      return res.json(url);
    } else {
      // If URL doesn't exist, create a new short URL and save it
      const newUrl = new Url({ originalUrl });
      await newUrl.save();
      return res.json(newUrl);
    }
  } catch (err) {
    // Handle errors and return a server error message
    console.error(err);
    res.status(500).json('Server error');
  }
});

// Route to handle redirect based on the shortened URL
router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params; // Get the shortened URL code from the route parameter
  try {
    // Find the URL based on the shortened URL code
    const url = await Url.findOne({ shortUrl });
    
    if (url) {
      // Increment the click count for tracking purposes
      url.clicks++;
      await url.save();
      
      // Redirect to the original URL
      return res.redirect(url.originalUrl);
    } else {
      // If no URL is found, return a 404 error
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    // Handle errors and return a server error message
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
