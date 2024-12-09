const ReserveModel = require('../models/reserve');

exports.postReserve = async (req, res) => {

    const { ic } = req.body;
    const { busnumber } = req.body;
    const { busname } = req.body;
    const { from } = req.body;
    const { to } = req.body;
    const { date } = req.body;
    const { time } = req.body;
    const { lat } = req.body;
    const { lng } = req.body;
    const { status } = req.body;

    const blog = new ReserveModel({
        ic, busnumber, busname, from, to, date, time, lat, lng, status
    });

    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};

exports.getReserve = async (req, res) => {

    try {

        const blogs = await ReserveModel.find();
        res.json(blogs)

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};