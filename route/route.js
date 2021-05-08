const express = require('express');
const router = express.Router();
const fs = require('fs');

const createDir = (path)=>{
    fs.mkdirSync(process.cwd() + path, { recursive : true}, (err)=>{
        if(err) throw err;
    })
}
createDir('/uploads');
createDir('/converts');


const FileControler = require('../controller/controller');

router.post('/upload', FileControler.fileProcess)

module.exports = router;