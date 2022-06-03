import productModel from '../model/product.model.js';

class ProductService{
    constructor(){}

    getObjects = async () => await productModel.find({});

    getObject = async (id) => await productModel.findOne({_id: id});

    addObject = async (obj) => {
        const newProduct = await new productModel(obj);
        newProduct.save();

        return newProduct;

    }
    
    updateObject = async (obj) => {
        let {_id, ...rest} = obj;
        const newProduct =  await productModel.findOneAndUpdate({_id}, rest);

        return newProduct;

    }

    deleteObject = async (id) => await productModel.findOneAndDelete({_id: id});
}

export default ProductService;