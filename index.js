const express = require('express');
const multer = require('multer');

require('./config');
const AdminDetails = require('./admin');

const app = express();
app.use(express.json());


const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, 'uploads')
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname+"_"+Date.now()+ ".jpg");
        }
    })
}).single('user_file');


app.post("/upload", upload, (req, res) => {
 
  res.send('file uploaded');
});





app.listen(5000);