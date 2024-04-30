const express = require('express')
const userRouter = require('./users')
const authRouter = require('./auth')
const profileRouter = require('./profile')
const postsRouter = require('./posts')

module.exports.init = (app) =>{
    app.use('/api/users',userRouter)
    app.use('/api/auth',authRouter)
    app.use('/api/profile',profileRouter)
    app.use('/api/posts',postsRouter)
}