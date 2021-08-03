const express = require('express')
const app = express()
app.use(express.json())

const callApi = require('./route/index')
app.use('/',callApi)

app.listen(3000,()=>{
    console.log('server running----')
})
