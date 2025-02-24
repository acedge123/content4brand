const Content = require('../models/content');
const Creator = require('../models/creator');

exports.uploadContent = async (req, res) => {
    const { type, url, brandUrl, pricePerPost, pricePer6MonthLicense, creatorId } = req.body;
    try {
        const content = new Content({
            type,
            url,
            brandUrl,
            pricePerPost,
            pricePer6MonthLicense,
            creator: creatorId
        });
        await content.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};