const express = require('express')
const router = express.Router()

const updateApiController = require('../controller/putAPI.controller')

router.put('/',updateApiController.updateData)

module.exports = router