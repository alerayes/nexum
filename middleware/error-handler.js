import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.message);
    const defaultError = {
        statusCode: err.statusCode  || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later',
    }
    // Missing field error
    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        // defautlError.msg = err.message
        defaultError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(',')
    }
    // Unique field error
    if(err.code && err.code === 11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue) } field has to be unique`
    }
    // res.status(defautlError.statusCode).json({msg: err})
    res.status(defaultError.statusCode).json({msg: defaultError.msg})
}

export default errorHandlerMiddleware


