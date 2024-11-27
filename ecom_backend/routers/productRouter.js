// const GetProductController = require("../controllers/GetProductController");
const UploadProductController = require("../controllers/UploadProductController");
const DeleteProductController = require("../controllers/DeleteProductController");
const UpdateProductController = require("../controllers/updateProductController");
const  getAllProductsController = require("../controllers/getAllProductsController");
const { files, validationResult } = require("express-validator");

// const adminAuth = require("../middleware/adminAuth")
// const customerAuth = require("../middleware/customerAuth")

const ProductRouter = require("express").Router();

module.exports = (upload) => {
  ProductRouter.post(
    "/product",
  
    upload.fields([{ name: "productPicture", maxCount: 5 }]),
    async (req, res) => {
      const errors = validationResult(req);

      UploadProductController.Execute(req, res);
    }
  );

  ProductRouter.get("/getallproduct", async (req, res) => {
    getAllProductsController(req, res); 
  });

 
  ProductRouter.delete("/product/:id", async (req, res) => {
    DeleteProductController.Execute(req, res);
  });

  ProductRouter.put("/product/:id", async (req, res) => {
    UpdateProductController.Execute(req, res);
  });




  return ProductRouter;
};

