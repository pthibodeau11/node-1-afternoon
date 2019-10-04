// requiring express step
const express = require("express");

// require products.json file
// const products = require("../products.json");

// require the getProducts.json and getProduct files
const { getProducts } = require("./getProducts");
const { getProduct } = require("./getProduct");

// declare app variable and set it equal to express invoked
const app = express();

//declare port for server to listen on
const port = 4444;

// write endpoint (method, path, handler) to send array of products up to client
app.get("/api/products", getProducts); // sends products back to the client with 200 status

app.get("/api/products/:id", getProduct);

//invoke app.listen, provide port variable, callback w/ console log
app.listen(port, () => {
  console.log("We're live");
});
