const jwt =  require('jsonwebtoken')

const jwtSecret = "rohithjwt"


const generateToken = (payload)=>{

    return jwt.sign(payload,jwtSecret,{
        expiresIn:'12m'
    })
}


module.exports = generateToken