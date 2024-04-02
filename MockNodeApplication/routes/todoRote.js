const { getTodos } = require('../controllers/todoController')
const verifyToken = require('../utils/verifyToken')

const todoRouter = require('express').Router()

todoRouter.route('/todos').get(verifyToken,getTodos)

module.exports = todoRouter
  

