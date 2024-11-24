const SignupModel = require('../models/signup');
const multer = require('multer');
const fs = require("fs");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage
}).single('dpImage')


exports.postSignup = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const newSignup = new SignupModel({
                name: req.body.name,
                nic: req.body.nic,
                contact: req.body.contact,
                username: req.body.username,
                password: req.body.password,
                image: {
                    data: fs.readFileSync('uploads/' + req.file.filename),
                    contentType: 'image/png',
                }
            })
            newSignup.save()
                .then(() => res.send('successfully signup'))
                .catch((err) => console.log(err));
        }
    });
};


exports.findUser = async (req, res) => {

    try {

        const blogs = await SignupModel.find();
        const findArray = [];

        blogs.map((item) => {
            if (item.username === req.params.id) {
                findArray.push(item.password)
            }
        });

        res.json(findArray)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
