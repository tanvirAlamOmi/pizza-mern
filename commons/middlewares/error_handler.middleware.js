import ApplicationError from "../responses/error/application.error.js";
import InternalServerError from "../responses/error/server/internal_server.error.js";
import applicationResponse from "../responses/success/application.response.js";


let errorHandler = (err, req, res, next) => {
    if(!(err instanceof ApplicationError)) err = new InternalServerError();
    applicationResponse.send(res, null, err.statusCode, err.message);
}

export default errorHandler;