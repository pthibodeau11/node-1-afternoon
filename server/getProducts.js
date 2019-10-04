const products = require("../products.json");

// copied the handler from our endpoint into this file & stored to getProducts variable
let getProducts = (req, res) => {
  if (req.query.price) {
    const items = products.filter(
      val => val.price >= parseInt(req.query.price)
    );
    return res.status(200).send(items);
  }
  res.status(200).send(products); // sends products back to the client with 200 status
};

//export function
module.exports = {
  getProducts
};
