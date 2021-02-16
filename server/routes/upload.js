const express = require('express');
const router = express.Router();
const UploadedFile = require('../models/uploadedFile.model')
const fileUploader = require('../configs/cloudinary.config');


router.post('/cloudinary-upload', fileUploader.single('file'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  const newImage  = new UploadedFile({title: req.file.filename, fileUrl: req.file.path})
  newImage.save((err) => {
    if (err) {
      return res.status(500)
    }
    res.json({ secure_url: req.file.path })
  })
});

/* router.post('/cloudinary-upload', fileUploader.array('file'), (req, res, next) => {
 
  if (!req.files) {
    next(new Error('No file uploaded!'));
    return;
  }

  const urls = []
  req.files.forEach(file => urls.push(file.path))
  res.json({ secure_urls: urls });
}); */

module.exports = router;