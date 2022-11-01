import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const defautlError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: 'Something went wrong, try again later',
    }
    res.status(defautlError.statusCode).json({msg: err})
}

export default errorHandlerMiddleware