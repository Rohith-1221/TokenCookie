const express = require('express')
const jwt = require('jsonwebtoken')
const userRouter = require('./routes/userRoute')
const cors = require('cors')
const todoRouter = require('./routes/todoRote')
const cookieParser = require('cookie-parser')
const app = express()
const port = 7003

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],

    credentials:true,
}))
app.use(cookieParser())
app.use(todoRouter)
app.use('/user',userRouter)







app.listen(port,()=>{
    console.log(`app listening at port no ${port}`)
})