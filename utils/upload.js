const { storage } = require('../storage/storage');
const multer = require('multer');
const upload = multer({ storage });

function uploadToCloudinary(image) {
  return new Promise((resolve, reject) => {
    storage.uploader.upload(image, (err, url) => {
      if (err) return reject(err);
      return resolve(url);
    });
  });
}

module.filename = uploadToCloudinary;
