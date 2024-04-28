const express =  require('express');
const connectDB = require('./src/config/db')
const app = express();
const Router  =  require('./src/router/api/index') 
app.get('/', (rep,res,next)=>{
    res.send('RUN APP')
})

Router.init(app)
const PORT = process.env.PORT || 3030

app.listen(PORT , () => console.log(`Server started on port  ${PORT}`))