const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const cloudinary = require('../utils/cloudinary');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })

const upload = multer({storage});

module.exports = upload;
