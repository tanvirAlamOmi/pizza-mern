import CustomerModel from '../model/customer.model.js'

class CustomerService{
    constructor(){}

    async addCustomer (obj){
        const {name, email, password} = obj;
        const newCustomer = await new CustomerModel({name, email, password});
        newCustomer.save();

        return newCustomer;
    } 

}

export default CustomerService;