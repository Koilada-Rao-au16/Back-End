function executerFunction(resolve,reject){
    setTimeout(function(){
        const number = 12

        if (number % 2 == 0){
            const numberCube = cube(number)
            resolve(numberCube)
        }else {
            reject()
        }
    } , 5000)
}


const myPromise = new Promise (executerFunction)

myPromise.than(xyz)
myPromise.catch(abc)

function xyz(numCube){
    console.log("comming because promise fullfilled")
    console.log(numcube)
}
function abc(){
    console.log("coming because promise is rejected")
}

console.log("this is logged immediately")




