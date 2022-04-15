import CustomerService from '../service/customerService.js'

class CustomerController {
    constructor(){
        this.service = new CustomerService()
    }

    async register(req, res) {
        const obj = await this.service.addCustomer(req.body)
        res.send(obj);
    }
}

export default CustomerController;