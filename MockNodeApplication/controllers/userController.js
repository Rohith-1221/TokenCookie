const generateToken = require("../utils/jwt")

const dbUserName = "rohith"
const dbPassword = "rohith123"
const doLogin  = (req,res)=>{

    const {userName,password} = req.body

    if(userName&&password){
        if(userName===dbUserName&&password===dbPassword){
            const token = generateToken({userName});
            res.cookie("authToken",token,{
                maxAge:1000*60*60*24,
                httpOnly:true,
                secure:true
            })
            return res.status(200).json({
                status:"success",
                login:true,
                token
            })
        }
    
        return res.status(400).json({
            status:'failed',
            login:false,
            message:"incorrect username or password!"
        })
    }

    return res.status(400).json({
        status:"failed",
        message:"please enter the username and password"
    })
 

}

module.exports = {doLogin}