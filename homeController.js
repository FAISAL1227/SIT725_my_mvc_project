const Data = require('../models/Data');

exports.createData = async (req, res) => {
    try {
        const newData = new Data({ name: req.body.name });
        await newData.save();
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
