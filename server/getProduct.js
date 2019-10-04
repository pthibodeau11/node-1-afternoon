const products = require("../products.json");

// copied the handler from our endpoint into this file & stored to getProducts variable
const getProduct = (req, res) => {
  // find returns the item if it finds it, or undefined if not
  const item = products.find(val => val.id === parseInt(req.params.id));
  if (!item) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(item); // sends products back to the client with 200 status
};

//export function
module.exports = {
  getProduct
};
