const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

const app = express()

const Router  =  require('./src/router/api/index') 

require('dotenv').config();
//Init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded(({
    extended : true
})))
require('./src/config/db')

app.get('/', (rep,res,next)=>{
    res.send('RUN APP')
})
Router.init(app)
const PORT = process.env.PORT || 3030

app.listen(PORT , () => console.log(`Server started on port  ${PORT}`))