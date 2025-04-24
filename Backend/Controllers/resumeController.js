const Resume = require("../Models/resumeModel");
require('dotenv').config()
const axios = require('axios')
const cloudinary = require('../utils/cloudinary')

const apiKey = process.env.apiKey;
const resumeUrl = 'http://res.cloudinary.com/dybr6vuh9/image/upload/v1745472579/resumes/qql8lf3e9fgmkkfwlpbs.pdf';

const uploadResume = async (req, res) => {
  try {
    const {jobRole} = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded", success: false });
    }
    
       // Upload to Cloudinary (make sure your Cloudinary config is set)
       const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "auto", // Accepts pdf, docx, etc.
        folder: "resumes"
      });
  
      console.log("Cloudinary upload result:", result);
  

   const newResume = new Resume({
    fileName:file.originalname,
    cloudinaryUrl:file.path,
    publicId:file.publicId,
    jobRole
   })
  await newResume.save();
    res.status(200).json({
      message: "Resume uploaded and saved successfully",
      success: true,
      
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      message: "Upload failed",
      success: false,
      error: error.message,
    });
  }
};

const apiResumeParserCall = async (req,res)=>{
  try {
    const response = await axios.get(`https://api.apilayer.com/resume_parser/url?url=${resumeUrl}`, {
      headers: {
        'apikey': apiKey
      }
    });
    console.log(response.data);
    return res.status(200).json({
      message:"Successfully",
      responce:response.data
    })
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {uploadResume,apiResumeParserCall};
