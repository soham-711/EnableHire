const express = require('express');
const uploadResume = require('../Controllers/resumeController');
const upload = require('../Middlewares/cloudinaryUpload');
const routes = express.Router();


routes.post('/upload',upload.single('resume'),uploadResume)


module.exports = routes