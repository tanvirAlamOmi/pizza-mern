import CustomerService from '../service/customerService.js'
import applicationResponse from '../commons/responses/success/application.response.js';
import httpStatusCodes from '../commons/enums/http_status_codes.enum.js';
import NotFoundError from '../commons/responses/error/client/not_found.error.js'

class CustomerController {
    constructor(){
        this.service = new CustomerService()
    }

    async register(req, res) {
        const obj = await this.service.addCustomer(req.body);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.CREATED, "Registraion Successful");
    }

    async login(req, res) {
        const obj = await this.service.login(req.body);
        applicationResponse.send(res, obj, httpStatusCodes.SUCCESS.OK, "Login Successful");
    }
}

export default CustomerController;