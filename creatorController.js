const Creator = require('../models/creator');

exports.registerCreator = async (req, res) => {
    const { name, email, phone, socialHandle } = req.body;
    try {
        const creator = new Creator({
            name,
            email,
            phone,
            socialHandle
        });
        await creator.save();
        res.redirect('/upload');
    } catch (error) {
        res.status(500).send(error.message);
    }
};