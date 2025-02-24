const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const creatorController = require('../controllers/creatorController');

router.get('/', (req, res) => {
    res.render('upload');
});

router.post('/content', contentController.uploadContent);
router.post('/creator', creatorController.registerCreator);

module.exports = router;