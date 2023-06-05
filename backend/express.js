const express = require("express");
const app = express();

app.get("/express",(req,res) => {
    res.send('<h1>Hello express</h1>')
})
//첫번째인자는path,두번째인자는콜백함수

app.listen(3000, ()=>{
    console.log("server onload")
})
//첫번째인자port번호,두번째인자는콜백함수