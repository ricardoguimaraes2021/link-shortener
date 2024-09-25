const mongoose = require('mongoose');
const shortid = require('shortid');

// Define the schema for storing URLs
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  clicks: { type: Number, default: 0 } // Track how many times the short URL has been used
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
