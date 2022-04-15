import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
    {
        name: {type: String,  required: true},
        email: {type: String, required: true},
        password: {type: String, required: true}
    },
    {
        timeStamps: true
    }
)

export default mongoose.model('customers', customerSchema);