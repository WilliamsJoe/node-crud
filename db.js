require('dotenv').config();
const DB_URL = `mongodb://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PW)}${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoDB = process.env.MONGODB_URI || DB_URL;
const mongoose = require('mongoose');
const db = mongoose.connection;

function init() {
  mongoose.connect(mongoDB);
  mongoose.Promise = global.Promise;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

exports.init = init;
