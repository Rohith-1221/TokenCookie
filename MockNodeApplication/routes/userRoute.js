const { doLogin } = require('../controllers/userController')

const userRouter = require('express').Router()


userRouter.route('/login').post(doLogin)


module.exports = userRouter