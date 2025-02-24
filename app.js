const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const indexRoutes = require('./routes/index');
const uploadRoutes = require('./routes/upload');

const app = express();

mongoose.connect('mongodb://localhost:27017/alan_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRoutes);
app.use('/upload', uploadRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});