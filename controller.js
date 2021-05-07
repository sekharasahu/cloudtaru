const path = require('path');

class FileControler {
    static async fileProcess(req, res) {
        let fileType = req.file.mimetype;
        let ext = fileType.split('/')[1];
        
        // if() {
        //     return res.status(400).send("Invalid Format");
        // }

        return res.status(201).send("File Uploaded");
    }
}

module.exports = FileControler;

// {
//     fieldname: 'files',
//     originalname: '678130-profile-alt-4-512.png',
//     encoding: '7bit',
//     mimetype: 'image/png',
//     destination: 'uploads/',
//     filename: '8aa4a942db39ff3844ad26aa514c5c54',
//     path: 'uploads\\8aa4a942db39ff3844ad26aa514c5c54',
//     size: 20021
//   }