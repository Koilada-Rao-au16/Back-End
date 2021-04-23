const express = require("express");
const users =  require("/db/users.json");

const app = express();
app.use(express.json());

app.get ("users",(req,res)=>{
    const keys = Object.keys(users)
    const userArray = key.map(id => users[id])
    res.json(userArray)
})


app.get("/users/:userId",(req,res)=>{
    console.log(req.params)
    const{userId} = req.params
    const foundUser = users[userId]
    res.json(foundUser)
})

app.post("/users/:userId",(req,res)=>{
    console.log(req.params)
    const {userId} = req.params
    const foundUser = users[userId]
    res.json(foundUser)

})