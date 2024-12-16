const LocationModel = require('../models/location');
const ReserveModel = require('../models/reserve');

exports.postLocation = async (req, res) => {

    const { busnumber } = req.body;
    const { date } = req.body;
    const { time } = req.body;
    const { lat } = req.body;
    const { lng } = req.body;
    const { lastupdate } = req.body;
    const { status } = req.body;

    const blogs = await LocationModel.find();
    const findArray = [];

    blogs.map((item) => {
        if (item.busnumber === busnumber) {
            findArray.push(item)
        }
    });

    if (findArray.length == 0) {  //add

        const blog = new LocationModel({
            busnumber, date, time, lat, lng, lastupdate, status
        });
        const createdBlog = await blog.save();
        res.status(201).json({
            blog: {
                ...createdBlog._doc,
            },
        });

    } else { //not add
        res.json('busnumber already added')
    }

};

exports.getLocation = async (req, res) => {

    try {
        const blogs = await LocationModel.find();
        res.json(blogs)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteLocation = async (req, res) => {

    const { busnumber } = req.body;

    try {
        const deletedPost = await ReserveModel.deleteMany({ busnumber });
        const deleteFromLocation = await LocationModel.deleteMany({ busnumber });

        res.status(200).json({
            message: `${deletedPost.deletedCount} reserved details of busnumber "${busnumber}" deleted successfully`,
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};