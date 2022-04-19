import productModel from '../model/product.model.js';
import ProductService from '../service/product.service.js';

class ProductController {
    constructor (){
        this.service  = new ProductService()
    }

    async findAll(req, res) {

        const obj = await this.service.getObjects();
        res.send(obj);
    }
}




export default ProductController;