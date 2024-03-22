const express = require('express');
const dotenv=require('dotenv').config()
const dbConnect = require('./db/connect');
const cors= require('cors');
const router = require('./router/contact_router');

const app=express();

const PORT=process.env.PORT
const hostName='127.0.0.1'

app.use(cors());
app.use(express.json());
app.use('/api', router)

app.get("/",(req,res)=>{
     console.log(req.url);
     res.send("<h1>Hi</h1>")
})

app.listen(PORT,hostName,()=>{
     console.log("Server Started")
     dbConnect()
})