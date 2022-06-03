import httpStatusCodes from "../commons/enums/http_status_codes.enum.js";
import applicationResponse from "../commons/responses/success/application.response.js";
import OrderService from "../service/order.service.js";

class OrderController {
    constructor(){
        this.service = new OrderService()
    }

    async placeOrder(req, res) {
        const obj = this.service.submit(req.body)
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Payment Successful");
    }

    async getOrdersByCustomer(req, res) {
        const obj = await this.service.getOrdersByCustomer(req.body);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data fetched successfully");
    }

    async allOrders(req, res) {
        const obj = await this.service.getAllOrders();
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data fetched successfully");
    }

    
    async approveOrder(req, res) {
        const obj = await this.service.approveOrder(req.body.orderId);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data updated successfully");
    }
    
    async deliverOrder(req, res) {
        const obj = await this.service.deliverOrder(req.body.orderId);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data updated successfully");
    }
}

export default OrderController