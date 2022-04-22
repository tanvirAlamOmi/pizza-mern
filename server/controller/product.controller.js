import httpStatusCodes from '../commons/enums/http_status_codes.enum.js';
import applicationResponse from '../commons/responses/success/application.response.js';
import ProductService from '../service/product.service.js';

class ProductController {
    constructor (){
        this.service  = new ProductService()
    }

    async findAll(req, res) {

        const obj = await this.service.getObjects();
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK);

    }
}




export default ProductController;