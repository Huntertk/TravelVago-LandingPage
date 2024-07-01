const AppError =  require("../utils/appError");

exports.errorMiddleware = (err, req, res, next) => {

    if(process.env.NODE_ENV === 'development'){
        console.log(err);
    }
    let error = {
        statusCode: err.statusCode || 500,
        message: err.message || "Internal Server Error",
    }

    //Handle Invalid Mongoose Id
    if(err.name === "CastError"){
        const message = `Resource not found Invalid ${err?.path}`
        error = new AppError(message, 404)
    }

      //Handle Validation Error
    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(value => value.message)
        error = new AppError(message, 400)
    }

        //handle JWT Error
        if(err.name === 'JsonWebTokenError'){
            const message = `Json Web Token is Invalid. Try Again!!!`
            error = new AppError(message, 400)
        }
    
          //handle JWT Error
          if(err.name === 'TokenExpiredError'){
            const message = `Json Web Token is Expired. Try Again!!!`
            error = new AppError(message, 400)
        }

    res.status(error.statusCode).json({message: error.message, err})
}