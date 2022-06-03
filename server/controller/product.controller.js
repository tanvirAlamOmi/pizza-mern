import httpStatusCodes from '../commons/enums/http_status_codes.enum.js';
import applicationResponse from '../commons/responses/success/application.response.js';
import ProductService from '../service/product.service.js';

class ProductController {
    constructor (){
        this.service  = new ProductService()
    }

    async findAll(req, res) {

        const obj = await this.service.getObjects();
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data fetched successfully");

    }

    async findOne(req, res) {

        const obj = await this.service.getObject(req.body.productId);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data fetched successfully");

    }

    async create(req, res) {
        const obj = await this.service.addObject(req.body.product);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data added successfully");
    }
    
    async update(req, res) {
        const obj = await this.service.updateObject(req.body.updatedproduct);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data updated successfully");
    }

    
    async delete(req, res) {
        console.log("hi");
        const obj = await this.service.deleteObject(req.body.id);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Data deleted successfully");
    }
}




export default ProductController;