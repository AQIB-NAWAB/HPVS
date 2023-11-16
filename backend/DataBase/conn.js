const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aqib:aqib@cluster0.khuyflj.mongodb.net/").then(()=>{
    console.log("connection build...");
}).catch((e) =>{
    console.log(e);
});