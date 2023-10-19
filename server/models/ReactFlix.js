const mongoose = require('mongoose');

const ReactFlixSchema = new mongoose.Schema({
    name: String,     // Use String for defining the data type
    email: String,    // Use String for defining the data type
    password: String, // Use String for defining the data type
});

const ReactFlixModel = mongoose.model("users", ReactFlixSchema);

module.exports = ReactFlixModel;
