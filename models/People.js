///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require('mongoose');

///////////////////////////////
// MODELS
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
    // name: {type: String, required: [true, "Please put a name"]}
    name: String,
    image: String,
    title: String,

}, {timestamps: true});

const People = mongoose.model('People', PeopleSchema);

module.exports = People