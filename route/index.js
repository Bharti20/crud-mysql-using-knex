const express = require('express')
const Router = express.Router()

const getRouter = require('./createGetRoute')
const postRouter = require('./createPostRoute')
const putRouter = require('./createPutRoute')
const deleteRouter = require('./createDeleteRoute')

Router.use('/showData', getRouter);

module.exports = Router