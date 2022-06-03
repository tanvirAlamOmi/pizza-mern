import express from 'express';
import CustomerController from '../controller/customer.controller.js';
import ProductController from "../controller/product.controller.js";
import OrderController from "../controller/order.controller.js";

const router = express.Router();

// home
router.get("/", async (req, res) => res.send("Get the BEST pizza 🍕 at PITTA ❤️"));

// products
router.get("/product/get_products", async (req, res) => new ProductController().findAll(req, res));
router.post("/product/get_product", async (req, res) => new ProductController().findOne(req, res));
router.post("/product/add_products", async (req, res) => new ProductController().create(req, res));
router.post("/product/update_product", async (req, res) => new ProductController().update(req, res));
router.post("/product/delete_product", async (req, res) => new ProductController().delete(req, res));

// customers
router.post("/auth/customer/register", async (req, res) => new CustomerController().register(req, res));
router.post("/auth/customer/login",  async(req, res) =>  new CustomerController().login(req, res));
router.get("/customer/all_customers",  async(req, res) =>  new CustomerController().getAll(req, res));
router.post("/customer/delete_customer",  async(req, res) =>  new CustomerController().deleteCustomer(req, res));

//orders
router.post("/orders/place_order", async(req, res) => new OrderController().placeOrder(req, res));
router.post("/orders/get_customer_orders", async(req, res) => new OrderController().getOrdersByCustomer(req, res));
router.get("/orders/all_orders", async(req, res) => new OrderController().allOrders(req, res));
router.post("/orders/approve_order", async(req, res) => new OrderController().approveOrder(req, res));
router.post("/orders/deliver_order", async(req, res) => new OrderController().deliverOrder(req, res));

export default router;