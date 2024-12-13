const mongoose = require('mongoose');

// Define the schema
const DataSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

// Create the model
module.exports = mongoose.model('Data', DataSchema);
