const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()

//middleware for every request
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountyHunterdb')
.then(()=> console.log("Connected to DB"))

app.use("/bounties", require("./routes/bountyRouter.js"))

//error handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
})
