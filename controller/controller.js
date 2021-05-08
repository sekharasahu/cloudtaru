const fs = require('fs');
const img = require('imagemagick-convert');


const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    },

})

const upload = multer(
    {
        storage: storage,
        fileFilter: (req, file, cb) => {
            let fileType = file.mimetype;
            let ext = fileType.split('/')[1];

            if (ext == 'png' || ext == 'jpeg' || ext == 'jpeg') {
                return cb(null, true);
            } else {
                cb("Invalid format")
            }
        }
    }).single("file");




class FileControler {
    static async fileProcess(req, res) {

        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).send("Invalid format");
            } else if (err) {
                // An unknown error occurred when uploading.
                return res.status(400).send(err);
            }
            //console.log(req.file);
            img.convert({
                srcData: fs.readFileSync(req.file.path),
                srcFormat: req.file.mimetype.split('/')[1],
                format: 'TIFF'
            }).then((imgBuffer)=>{
                let convertFile = './converts/'+Date.now() +'-'+ req.file.originalname.split('.')[0]+'.tiff'
                fs.writeFileSync(convertFile, imgBuffer);
                fs.unlinkSync(req.file.path);
            })
            .catch(err=>{
                console.log(err);
            });
            return res.status(201).send("File Uploaded");
        })
    }
}

module.exports = FileControler;