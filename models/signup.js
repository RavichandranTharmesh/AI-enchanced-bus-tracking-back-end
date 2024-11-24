const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }

})

module.exports = mongoose.model('signup', SignupSchema)