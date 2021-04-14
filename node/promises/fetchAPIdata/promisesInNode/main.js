const express = require("express");
const { get } = require("node:http");
const app = express();

app.use(express.json())

app.get("/category/test",(req,res)=>{


    res.send("works")


})

    // const {name} = req.query
    // if (name) {
    //     res.send (`your name that server received=${name}`)
    //     return
    // }
    app.get("/mobile",(req,res)=>{

        res.send("iphone")
   
})

app.post("/users",(req,res)=>{
    console.log(req.body)
    res.send("post works")

    const newData = {...req.body}
    newData.appendedValue = "express"
    console.log(newData)
    res.json(newData)
})

app.listen(3000, ()=> console.log("server started"))


// const express = require("express")

// app = express()

// app.get("/category",(req,res)=>{

//     const {age} = req.query

//     if (age){

//         res.send(`server received  = ${age}`)
//         return 
//     }

//     console.log(req.query)
//     console.log(req.query)

//     res.send("its category")
// })



// app.get("/category/:categoryName",(req,res){
//   console.log(req.params);
//   console.log(req.params.categoryName);
//   res.send("sending .........")
// })

// app.listen(3000,()=>console.log("server started"))