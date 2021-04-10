
const randomClr = require("randomcolor")
const everyDay = require("everyday-fun")
const dateAndTime = require("log-current-time")
const express = require("express")


const app = express()

app.get("/randomColor", randomColor)
app.get("/joke", randomJoke)
app.get("/quote", randomQuotes)
app.get("/riddle", randomRiddle)
app.get("/currentDate", dateTime)

function randomColor(req, res){
    console.log("Received Request")
    const color = randomClr()
    res.send("Random RGB HEX Colors Are: "+color)
}
function randomJoke(req, res){
    console.log("Received Request")
    const joke = everyDay.getRandomJoke()
    res.send(joke.body)
}
function randomQuotes(req, res){
    console.log("Received Request")
    const quotes = everyDay.getRandomQuote()
    res.send(`${quotes.quote}<br><br>${quotes.author}`)
}
function randomRiddle(req, res){
    console.log("Received Request")
    const riddle = everyDay.getRandomRiddle()
    res.send(`${riddle.riddle}<br><br>Answer:  ${riddle.answer}`)
}
function dateTime(req, res){
    console.log("Received Request")
    const currentDate = dateAndTime()
    res.send(`Current Date And Time Is:  ${currentDate}`)
}


app.listen(3000, function(){
    console.log("Server Started")
})
