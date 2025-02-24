const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['video', 'image'],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    brandUrl: {
        type: String,
        required: true
    },
    pricePerPost: {
        type: Number,
        required: true
    },
    pricePer6MonthLicense: {
        type: Number,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Creator',
        required: true
    }
});

module.exports = mongoose.model('Content', contentSchema);