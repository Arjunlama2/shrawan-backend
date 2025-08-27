const express = require("express")
const app = express()
const userRouter=require("./router/user.router")

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("Hello world")
})
app.use(userRouter)

module.exports = app