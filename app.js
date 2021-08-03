const express = require('express')
const app = express()
app.use(express.json())

const getRouter = require('./route/createGetRoute')
const postRouter = require('./route/createPostRoute')
const putRouter = require('./route/createPutRoute')
const deleteRouter = require('./route/createDeleteRoute')

app.use('/',getRouter)


app.listen(3000,()=>{
    console.log('server running----')
})
