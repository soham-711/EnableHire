const Resume = require("../Models/resumeModel");

const cloudinary = require("cloudinary").v2;


const uploadResume = async (req, res) => {
  try {
    const jobRole = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded", success: false });
    }


    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto", // handles PDFs, images, etc.
      folder: "resumes",     // optional folder in your Cloudinary account
    });

   console.log(result);
   const newResume = new Resume({
    fileName:result.original_filename,
    cloudinaryUrl:result.url,
    publicId:result.public_id,
    jobRole
   })
  await newResume.save();
    res.status(200).json({
      message: "Resume uploaded and saved successfully",
      success: true,
      resume:newResume
    });
  } catch (error) {
    res.status(500).json({
      message: "Upload failed",
      success: false,
      error: error.message,
    });
  }
};

module.exports = uploadResume;
