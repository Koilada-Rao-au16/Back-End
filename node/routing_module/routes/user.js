const express = require("express")
const router = express.Router()
const axios = require("axios")


router.get("/",async (req,res)=>{
    const responseObj = await axios.get("https://jsonplaceholder.typicode.com/users")
      
    const thinUsers = responseObj.data.map((user)=>
    {
        delete user.address
        delete user.company
        return user

    })
})

module.exports = router