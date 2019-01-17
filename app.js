require('dotenv').config();
const express = require('express');
const DB_URL = 'mongodb://' + encodeURIComponent(process.env.DB_USER) + ':' + encodeURIComponent(process.env.DB_PW) + process.env.DB_HOST;
const mongoDB = process.env.MONGODB_URI || DB_URL;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;
const product = require('./routes/product.route');

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(PORT, () => {
  console.log('Server is up and running on port:', PORT);
});

