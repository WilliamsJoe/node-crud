require('dotenv').config();
require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;
const product = require('./routes/product.route');
const db = require('./db');

db.init();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(PORT, () => {
  console.log('Server is up and running on port:', PORT);
});
