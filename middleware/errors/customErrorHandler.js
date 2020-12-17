const CustomError =require('../../helpers/error/CustomError')

const customErrorHandler = (err,eq,res,next) =>{
  let customError = err;
  

  if(err.name === 'SyntaxError'){
    customError = new CustomError('Unexpected Syntax', 400)
  }
   if(err.name === 'ValidationError'){
    customError = new CustomError(err.message, 400)
  }
  // Duplicate email error
  if(err.code === 11000){
    customError = new CustomError('Duplicate Key Found : Check your input',400)
  }

    res.status(customError.status || 500)
    .json({
        success : false,
        message:customError.message 
    })
}

module.exports = customErrorHandler;