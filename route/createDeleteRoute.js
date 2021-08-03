const express = require('express')
const router = express.Router()
const deleteApiController = require('../controller/deleteAPI.controller')


router.delete('/',deleteApiController.deleteData)

module.exports = router
