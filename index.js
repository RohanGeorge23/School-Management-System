const express = require('express')
const stu = require('./routes/student')
require('dotenv').config();
var cors = require('cors')
const connectDb = require('./db/connectDb')
const createStu = require('./models/studentModel.js')
const app = express()
const port = process.env.PORT



// Cors Policy
app.use(cors())
// JSON
app.use(express.json())
// Connect DB
connectDb()


app.get('/',(req,res)=>{
  res.send('You Lit Bruhh')
})
// Custom Routes
app.use('/student',stu)

app.all('*',(req,res)=>{
  res.send('Incorrect Endpoint!')
})

// creating student
// createStu()

app.listen(port, () => {
  console.log(`Listening to Port http://localhost:${port}`)
})