const Products = require("../model/product_schema");

const getProducts = async (req, res) => {
  try {
    const product = await Products.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProducts;
