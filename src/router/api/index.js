const express = require('express')
const router = express.Router()
const userRouter = require('./users')

module.exports.init = (app) =>{
    app.use('/api/users',userRouter)
}