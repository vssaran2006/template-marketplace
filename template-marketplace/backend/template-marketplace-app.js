const express = require("express");
const app = express();
const fs = require("fs");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

app.get("/api/templates",(req,res)=>{
    fs.readFile("./data/templates.json",null,(err,data)=>{  
        if(err){            
            res.status(500).send(err)
        }else{
            res.json(JSON.parse(data))
        }      
        
    })
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Template Marketplace Back End Api started and listening at ${port}`)})