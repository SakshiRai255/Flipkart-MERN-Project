const express = require("express");
const router = express.Router();
const userSignup = require("../controllers/userController")
const userLogin = require("../controllers/userController");
const getProducts = require("../controllers/productController");

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/products',getProducts)

module.exports = router