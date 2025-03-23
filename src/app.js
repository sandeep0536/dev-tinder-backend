const express = require('express');
const app = express();
app.use((req,res)=>{
    res.send("Server is up and its working")
    console.log("its working")
})
app.listen(3000,()=>{
    console.log("server is up on 3000...")
})