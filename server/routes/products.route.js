const express = require("express")
const router =  express.Router()
const productsController = require("../controllers/products.controller")


router.route("/")
    .get(productsController.GetProducts)
    .post(productsController.AddProduct)

    
router.get("/category",productsController.GetProductInCategory)


router.route("/:id")
    .patch(productsController.UpdateProduct)
    .delete(productsController.DeleteProduct)
    .get(productsController.GetSingleProduct)


router.get("/categories",productsController.GetCategories)


module.exports = router