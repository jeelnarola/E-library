const express = require('express')
const DataBaseConnect = require('./configs/db.configs')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json({msg:"Welcome to E-Libray"})
})

app.listen(process.env.PORT,()=>{
    console.log("Server Start :- ",process.env.PORT)
    DataBaseConnect()
})