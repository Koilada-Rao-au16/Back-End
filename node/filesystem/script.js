const fileSystem = require("fs")

console.log("reading")

// sync version

// const textFromFile = fileSystem.readFile("./samplefile.txt","utf-8")

// async version

// fileSystem.readFile("./samplefile.txt","utf-8",function(err,data){
//     if (err){
//         console.log("Error Occured")
//         console.log(err)
//     }
//     console.log(data)
// })

// console.log("finished")
// console.log("finished")
// console.log("finished")



const textToWrite = "This is going to be written in the file"

// sync version

// fileSystem.writeFileSync("./myFile.txt",textToWrite)

// async versin

fileSystem.writeFile("./filewrited",textToWrite,function(err,data){
    if (err) throw err
    console.log("finished")
    console.log(data)

})
console.log("written")

// synce version

try {
    fileSystem.unlinkSync("./myFi.txt")
    console.log("delated")
}catch(error){
    console.log(error)
}

// async versin

fileSystem.unlink("./files.txt",function(err){
    if (err) throw err
    console.log("delated files.txt")
})