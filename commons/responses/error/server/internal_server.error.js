import httpStatusCodes from "../../../enums/http_status_codes.enum.js";
import ApplicationError from "../application.error.js";

class InternalServerError extends ApplicationError {
    constructor (
        errorMessage = "Something went wrong",
        errorName = "Internal Server Error",
        statusCode = httpStatusCodes.SERVER_ERROR.INTERNAL_SERVER_ERROR
    ){
        super(errorMessage, errorName, statusCode);
    }
}

export default InternalServerError;