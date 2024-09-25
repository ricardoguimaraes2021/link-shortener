// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlRoutes = require('./routes/urlRoutes'); // Import URL routes

// Set up the port (using 5000 or a port from environment variables)
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (for frontend)
app.use(express.static('public'));

// Connect to MongoDB locally using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Locally'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Use the URL routes
app.use('/', urlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
