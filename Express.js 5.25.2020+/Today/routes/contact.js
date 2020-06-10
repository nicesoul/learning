var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
  res.render('contact', {
    title: 'contact page'
  });
});


const multer = require('multer')

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const path = `./uploads`
    fs.mkdirSync(path, {
      recursive: true
    })
    return callback(null, path)
  },
  filename: (req, file, callback) => {
    // mimetypes
    var extension = {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/gif': '.gif'
    }
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
      // file.originalname.substr(0,file.originalname.length-4)
      let output = 'image-' + Date.now() + extension[file.mimetype] // .jpg .png .gif
      // image-4384784348734
      callback(null, output)
    } else {
      console.log('This mimetype is not allowed')
    }
  }
})
var upload = multer({
  storage: storage
}).single('currentFile')

router.post('/upload', (req, res) => {

  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      res.end('error')
    } else {
      res.end('file is uploaded')
    }
  })
})
module.exports = router;