import httpStatusCodes from "../../../enums/http_status_codes.enum.js";
import ApplicationError from "../application.error.js";

class ForbiddenError extends ApplicationError{
    constructor(
        errorMessage,
        errorName = "Forbidden",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.FORBIDDEN
    ){
        super(errorMessage, errorName, httpStatusCode)
    }
}
export default ForbiddenError;