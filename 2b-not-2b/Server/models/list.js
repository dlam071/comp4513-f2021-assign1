const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    id: String, 
    filename: String,
    title: String, 
    likelyDate: Number,
    genre: String,
    wiki: String, 
    gutenberg: String, 
    shakespeareOrg: String,
    synopsis: String, 
    desc: String
});

module.exports = mongoose.model('Play', playSchema, 'plays');
