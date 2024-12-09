const mongoose = require('mongoose');

const BusSchema = mongoose.Schema({

    busnumber: {
        type: String,
        required: true
    },
    busname: {
        type: String,
        required: true
    },
    busmodal: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('bus', BusSchema)