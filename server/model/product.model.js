import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name : {type: String, required: true},
        variants: [],
        prices: [],
        category: {type: String, required: true},
        image: {type: String, required: true},
        description: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

const productModel = mongoose.model('products', productSchema);

export default productModel;