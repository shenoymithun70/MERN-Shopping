const express = require("express");
const router = express.Router();

const {getProductById, createProduct , getProduct, photo, deleteProduct, updateProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product"); 
const {isSignedIn , isAuthenticated , isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("productId", getProductById)

//create product 
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

//read product
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete product
router.delete("/product/:productId/:userId", isSignedIn , isAuthenticated , isAdmin , deleteProduct);

//update product     
router.put("/product/:productId/:userId", isSignedIn , isAuthenticated , isAdmin , updateProduct);


//listing route
router.get("/products", getAllProducts)

router.get("/products/categories", getAllUniqueCategories)

module.exports = router;
