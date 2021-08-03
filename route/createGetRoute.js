const express = require('express')
const router = express.Router()
const getApiController = require('../controller/getApi.controller')

router.get('/', getApiController.showAllData)

module.exports = router