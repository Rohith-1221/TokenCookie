const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const {authToken} = req.cookies
    console.log(authToken,'this is authtoken')
   try{
    const isValid = jwt.verify(authToken,"rohithjwt")
    console.log(isValid,"this is result of jwt token verification")
    next()
   }catch(err){
    console.log(err)
    return res.status(400).json({
        status:'failed',
        message:'invaid token'
    })
   }
}

module.exports = verifyToken