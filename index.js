require('dotenv').config()
const express = require('express')
const app=express();
const router = express.Router();
require('./models/config')
const bodyparser = require('body-parser')
app.use(express.json())

const userRouter = require('./routes/userRouter')
console.log('****', process.env.port)

app.use('/',userRouter)
app.listen(9000,(req, res)=>{
console.log('server is running on port number: 9000')

})