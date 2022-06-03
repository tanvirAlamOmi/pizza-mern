import httpStatusCodes from '../../enums/http_status_codes.enum.js'

class AppilcationResponse {
    send = (res, data, statusCode, message = "") => {
        let response = {
            data,
            isSuccessful : Object.values(httpStatusCodes.SUCCESS).includes(statusCode),
            message
        }

        return res.status(statusCode).json(response);
    }
}

export default new AppilcationResponse();