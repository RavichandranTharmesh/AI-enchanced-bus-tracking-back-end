const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({

    busnumber: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    lastupdate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
   
})

module.exports = mongoose.model('location', LocationSchema)