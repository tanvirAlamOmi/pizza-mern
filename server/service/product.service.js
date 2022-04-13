import productModel from '../model/product.model.js';

class ProductService{
    constructor(){}

    getObjects = async () => await productModel.find({});
}

export default ProductService;