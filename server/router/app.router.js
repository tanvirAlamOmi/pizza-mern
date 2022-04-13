import express from 'express';
import ProductController from "../controller/product.controller.js";

const router = express.Router();

router.get("/", async (req, res) => res.send("Get the BEST pizza 🍕 at PITTA ❤️"));
router.get("/get_products", async (req, res) => new ProductController().findAll(req, res));

export default router;