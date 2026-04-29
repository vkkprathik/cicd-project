const express = require("express");
const app = express();

app.get("/", (req,res)=>{
  res.send("NEW DEPLOYMENT SUCCESS 🎉");
});

app.listen(3000);