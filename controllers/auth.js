 
 const register = (req,res,next) =>{
    res
    .status(200)
    .json({
        register:true
    })
}

module.exports = { register }