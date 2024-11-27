// Get products with pagination and sorting
const Product = require("../model/Product");    
const getAllProductsController = async (req, res) => {
    try {
        const { page, limit, sort } = req.query;
        const products = await Product.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .sort(sort);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }   
}

module.exports = getAllProductsController