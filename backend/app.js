const express = require("express");
const cors=require("cors");
const app = express();
const port = 5000;
const path = require("path")
require("dotenv").config({ path: "./config/.env" });
app.use(cors(
    {
        origin:"*",
        withCredentials:true,
    }

));
require("./DataBase/conn");
const URLS = require("./Router/route");

app.use("/api/v1",URLS);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
app.listen(port,()=>{
    console.log("server starts.............");
})