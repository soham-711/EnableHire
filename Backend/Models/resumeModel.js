const mongoose = require('mongoose');


const resumeSchemsa = new mongoose.Schema({
    fileName:String,
    cloudinaryUrl:String,
    publicId:String,
    jobRole:String,
    uploadedAt:{
        type:Date,
        default:Date.now,
    }
})

const Resume = mongoose.model('resume',resumeSchemsa);

module.exports = Resume;