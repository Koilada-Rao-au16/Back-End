const fs = require("fs").promises
fs.readFile("./sample.txt","utf-8",function(data){
    console.log(data)
})

fs.writeFile("write.txt","hey bhaskar writing file read",function(data)
{
    console.log(data)
})

fs.writeFile("new","hiiiiiiiiiiiiiiii").then(()=> console.log("done"))

fs.writeFile("test","iam testing").then(()=>console.log("dones"))


async function read(){
    const data = await fs.readFile("asyn.txt","utf-8")
    console.log(data)
}

read()


async function writ(){
    try {

    const data = await fs.writeFile("hey.txt","iam writing data in hey file")
    console.log(data)
} catch (error){

}

writ()