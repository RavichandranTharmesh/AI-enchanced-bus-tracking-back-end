const BusModel = require('../models/bus');

exports.postBus = async (req, res) => {

    const { busnumber } = req.body;
    const { busname } = req.body;
    const { busmodal } = req.body;
    const { active } = req.body;

    const blog = new BusModel({
        busnumber, busname, busmodal, active
    });

    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.getBus = async (req, res) => {

    try {

        const blogs = await BusModel.find();
        res.json(blogs)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};