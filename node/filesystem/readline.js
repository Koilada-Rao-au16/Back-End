const readline = require("readline")

const rl = readline.createInterface(process.stdin,process.stdout)

rl.question("What is yout name?",function(name){
    console.log("Hello Nice To Meet You",`${name}`)
    rl.question("Whate is your age",function(age){
        console.log("my age is " , `${age}`)
        rl.close()
    })
   
})

