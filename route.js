const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const FileControler = require('./controller');

router.post('/upload', upload.single("files"), FileControler.fileProcess)

module.exports = router;