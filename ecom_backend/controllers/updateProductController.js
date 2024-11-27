 // write program to update product
const Product = require("../model/Product");
const File = require("../model/File");
const { validationResult } = require("express-validator");  

class UpdateProductController {
    static async Execute(req, res) {
        console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product updated successfully", product });
      }
    }           
}

module.exports = UpdateProductController