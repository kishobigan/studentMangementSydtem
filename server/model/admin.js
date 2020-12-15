const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type:Boolean,
        default:false
    }
})

module.exports = Admin = mongoose.model('Admin', adminSchema);