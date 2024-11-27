 //make a controller to delete a product
const Product = require("../model/Product");
const File = require("../model/File");  
const { validationResult } = require("express-validator");  
class DeleteProductController {
  static   async  Execute (req, res){
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        const fileIds = product.productPicture.map((file) => file._id);
        await File.deleteMany({ _id: { $in: fileIds } });
        return res.status(200).json({ message: "Product deleted successfully" });
      }
    } 
}

module.exports = DeleteProductController