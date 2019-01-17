const Product = require('../models/product.model');

exports.list = function (req, res) {
  Product.find({}, (err, products) => {
    if (err) {
      return console.error(err);
    }
    res.send(products);
  });
};

exports.read = function (req, res) {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      return console.error(err);
    }
    res.send(product);
  });
};

exports.create = function (req, res) {
  console.log(req.body);
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  product.save(err => {
    if (err) {
      return console.error(err);
    }
    res.send('Product successfully created');
  });
};

exports.update = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
    if (err) {
      return console.error(err);
    }
    res.send('Product updated');
  });
};

exports.remove = function(req, res) {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) {
      return console.error(err);
    }

    res.send('Delete Successful');
  });
};
