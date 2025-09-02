const fs=require("fs");
const express=require("express");
const port=3000;
const app=express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    const data=fs.readFileSync("index.html");
    res.end(data)
});

app.listen(port,()=>{
    console.log("app is listening to port 3000");
});