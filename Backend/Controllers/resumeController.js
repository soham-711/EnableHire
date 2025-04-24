const Resume = require("../Models/resumeModel");
require('dotenv').config()
const axios = require('axios')

const apiKey = process.env.apiKey;
const resumeUrl = 'public\\temp\\sample-resumes.docx';

const uploadResume = async (req, res) => {
  try {
    const {jobRole} = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded", success: false });
    }
    console.log(file);
    

   const newResume = new Resume({
    fileName:file.originalname,
    cloudinaryUrl:file.path,
    publicId:file.de,
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

const apiResumeParserCall = async ()=>{
  try {
    const response = await axios.get(`https://api.apilayer.com/resume_parser/url?url=${resumeUrl}`, {
      headers: {
        'apikey': apiKey
      }
    });
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {uploadResume,apiResumeParserCall};
