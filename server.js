const express= require('express')
const app= express()


app.get('/',(req,res)=>{
    res.send('Hello .... we are ready')
})


app.listen(3000,()=>{
    console.log('server is all set to serve');
    
})