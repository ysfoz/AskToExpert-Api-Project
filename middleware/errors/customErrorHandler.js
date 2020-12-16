const CustomError =require('../../helpers/error/CustomError')

const customErrorHandler = (err,eq,res,next) =>{
  let customError = err;
  

  if(err.name === 'SyntaxError'){
    customError =  CustomError('Unexpected Syntax', 400)
  }
   if(err.name === 'ValidationError'){
    customError = CustomError(err.message, 400)
  }

    res.status(customError.status || 500)
    .json({
        success : false,
        message:customError.message 
    })
}

module.exports = customErrorHandler;