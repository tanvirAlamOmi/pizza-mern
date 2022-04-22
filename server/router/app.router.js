import express from 'express';
import CustomerController from '../controller/customer.controller.js';
import ProductController from "../controller/product.controller.js";
import OrderController from "../controller/order.controller.js";

const router = express.Router();

// home
router.get("/", async (req, res) => res.send("Get the BEST pizza 🍕 at PITTA ❤️"));

// products
router.get("/product/get_products", async (req, res) => new ProductController().findAll(req, res));

// customers
router.post("/auth/customer/register", async (req, res) => new CustomerController().register(req, res));
router.post("/auth/customer/login",  async(req, res) =>  new CustomerController().login(req, res));

//orders
router.post("/orders/place_order", async(req, res) => new OrderController().placeOrder(req, res));
router.post("/orders/get_customer_orders", async(req, res) => new OrderController().getOrdersByCustomer(req, res));

export default router;