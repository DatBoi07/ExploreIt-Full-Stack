const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect(
    "mongodb+srv://Shikhar:urEsGjTvqxGUrMpu@cluster0.pssv4ie.mongodb.net/products_test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();
  console.log(typeof createdProduct._id);
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec(); // find doesnt return a promise but kind of promis so we use exec to amke it as promise
  res.json(products);
};
exports.createProduct = createProduct;
exports.getProducts = getProducts;
