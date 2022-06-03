class ApplicationError extends Error {
    constructor(errorMessage, errorName, statusCode){
        super(errorMessage);
        this.message = errorMessage
        this.name = errorName;
        this.statusCode = statusCode
    }
}

export default ApplicationError;