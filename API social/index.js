const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const multer = require('multer')

dotenv.config();

// DB connexion
mongoose
    .connect(`mongodb+srv://loic-demanou:${process.env.MONGO_USER_PASS}@cluster0.ioueg.mongodb.net/media-social`, 
    { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.log('failed to connect', err));

    // middleware
    app.use(express.json());
    app.use(helmet());
    app.use(morgan("common"));


    const storage = multer.diskStorage({
        destination:(req, file, cb) => {
            cb(null, "public/images");
        },
        filename: (req, file, cb) => {
            cb(null, req.body.name);
        },
    })

    const upload = multer({storage});
    app.post('/api/upload', upload.single('file'), (req, res) => {
        try {
            return res.status(200).json("File uploaded successfully")
        } catch (err) {
            console.log(err);
        }
    })

    app.use('/api/auth', authRoute);
    app.use('/api/users', userRoute);
    app.use('/api/posts', postRoute);
    
app.listen(process.env.PORT, ()=> {
    console.log("back is runnig");
})