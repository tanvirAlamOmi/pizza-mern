import httpStatusCodes from "../../../enums/http_status_codes.enum.js";
import ApplicationError from "../application.error.js";

class UnauthorizedError extends ApplicationError{
    constructor(
        errorMessage,
        errorName = "Not Found Error",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.UNAUTHORIZED
    ){
        super(errorMessage, errorName, httpStatusCode)
    }
}
export default UnauthorizedError;