import httpStatusCodes from "../../../enums/http_status_codes.enum.js";
import ApplicationError from "../application.error.js";

class NotFoundError extends ApplicationError{
    constructor(
        errorMessage = "Resource not found",
        errorName = "Not Found Error",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.NOT_FOUND
    ){
        super(errorMessage, errorName, httpStatusCode)
    }
}
export default NotFoundError;