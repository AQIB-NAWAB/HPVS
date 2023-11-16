const express = require("express");
const cors=require("cors");
const app = express();
const port = 5000;
app.use(cors(
    {
        origin:["http://localhost:5173"],
        withCredentials:true,
    }

));
require("./DataBase/conn");
const URLS = require("./Router/route");

app.use("/api/v1",URLS);



app.listen(port,()=>{
    console.log("server starts.............");
})