
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    conf_password:{
        type: String,
        required:true,
    }
})
const User = mongoose.model('JobSeeker',userSchema);
module.exports = User