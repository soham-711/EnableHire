const express = require("express");
const {uploadResume} = require("../Controllers/resumeController");
const upload = require("../Middlewares/cloudinaryUpload");
const { apiResumeParserCall } = require("../Controllers/resumeController");
const routes = express.Router();


routes.post("/upload", upload.single("resume"),uploadResume);
routes.get("/analysis", apiResumeParserCall);

module.exports = routes;
