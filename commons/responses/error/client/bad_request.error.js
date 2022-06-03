import httpStatusCodes from "../../../enums/http_status_codes.enum.js";
import ApplicationError from "../application.error.js";

class BadRequestError extends ApplicationError{
    constructor(
        errorMessage,
        errorName = "Bad Request",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.BAD_REQUEST
    ){
        super(errorMessage, errorName, httpStatusCode)
    }
}
export default BadRequestError;