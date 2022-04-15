import express from 'express';
import CustomerController from '../controller/customer.controller.js';
import ProductController from "../controller/product.controller.js";

const router = express.Router();

// home
router.get("/", async (req, res) => res.send("Get the BEST pizza 🍕 at PITTA ❤️"));

// products
router.get("/product/get_products", async (req, res) => new ProductController().findAll(req, res));

// customers
router.post("/auth/customer/register", async (req, res) => new CustomerController().register(req, res));

export default router;