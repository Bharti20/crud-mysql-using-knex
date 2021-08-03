const express = require('express')
const router = express.Router()
const createControllerApi = require('../controller/postAPI.controller')

router.post('/',createControllerApi.dataCreate)

module.exports = router