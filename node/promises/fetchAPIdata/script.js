const getDataBtn = document.getElementById("getData")

getDataBtn.addEventListener("click", handleButtonClick)

function handleButtonClick(){
    getDataFromServer()
}

async function getDataFromServer(){
    try {
        const responseObj = await ("https://jsonplaceholder.typicode.com/todos")
        console.log(responseObj)

        const jsonData = await responseObj.json()
        console.log(jsonData)

        const paragraphs = jsonData.map(todoItem => `<li>${todoItem.title}</li>`).join("")
        document.getElementById("todoItems").innerHTML = `<ul>${paragraphs}</ul>`
    } catch (error){
        document.getElementById("todoItems").innerHTML = "ERROR OCCURRED"
    }
}



const getDataBtn = document.getElementById("getData")

getDataBtn.addEventListener("click", handleData)

function handleData(){
    getDataFromServer()
}

async function getDataFromServer(){
    try{
        const responseObj = await ("https://jsonplaceholder.typicode.com/todos")
        console.log(responseObj)

        const jsonData = await responseObj.json()
        console.log(jsonData)

        const paragraph = jasonData.map(todoItem=> `<li>${todoItem.title}</li>`)
        console.log(paragraph)

    } catch (error) {
        document.getElementById("getData").innerHTML = "ERROR"
    }
}


const getDataBtn = document.getElementById("getData")

getDataBtn.addEventListener("click", handleBtn)

function handleBtn(){
    getDataFromServer()
}

async getDataFromServer(){
    const responseObj = await ("https://jsonplaceholder.typicode.com/todos")
    console.log(responseObj)

    const jsonData = await responseObj.json()
    console.log(jsonData)

    const paragraph = jasonData.map(todoItem => `<li>${todoItem.title}</li>`)
    console.log(paragraph)
}catch ( error){
    document.getElementById("getData").innerHTML = "ERROR OCCURED"
}