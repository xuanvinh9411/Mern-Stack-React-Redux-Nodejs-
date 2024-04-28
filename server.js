const express =  require('express');

const app = express();

app.get('/', (rep,res,next)=>{
    res.send('RUN APP')
})
const PORT = process.env.PORT || 3030

app.listen(PORT , () => console.log(`Server started on port  ${PORT}`))