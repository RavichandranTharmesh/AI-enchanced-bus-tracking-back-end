const mongoose = require('mongoose');

const ReserveSchema = mongoose.Schema({

    ic: {
        type: String,
        required: true
    },
    busnumber: {
        type: String,
        required: true
    },
    startplace: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
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
    status: {
        type: String,
        required: true
    },
   
})

module.exports = mongoose.model('reserve', ReserveSchema)