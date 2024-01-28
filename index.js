const express = require ('express')
const App = express()

App.use(express.json())
App.get('/send',(req,res)=>{

    res.send(`  your name is   ${req.body.name} and your age is  ${req.query.age}`)

})
App.get('/',(req,res)=>{


    res.send('maman thank you ')
})



App.listen(3000, ()=>{
    console.log('console :arabes ');
})