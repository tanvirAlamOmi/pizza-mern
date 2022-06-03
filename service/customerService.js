import NotFoundError from '../commons/responses/error/client/not_found.error.js';
import CustomerModel from '../model/customer.model.js'


class CustomerService{
    constructor(){}

    async addCustomer (obj){
        const { name, email, password } = obj;
        const newCustomer = await new CustomerModel({name, email, password});
        newCustomer.save();

        return newCustomer;
    } 

    async login (obj){
        const { email, password } = obj;

        let customer = await CustomerModel.findOne({email});

        if(!customer) throw new NotFoundError('User not found');

        if(password !== customer.password) throw new NotFoundError('Password incorrect');

        customer.password = undefined

        return customer;
    }

    async findAll() {
        const customers = await CustomerModel.find({})
        return customers;
    }

    
    async deleteOne(id) {
        const customer = await CustomerModel.findOneAndDelete({_id: id})
        return customer;
    }
}

export default CustomerService;