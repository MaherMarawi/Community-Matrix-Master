

const express = require('express')
const app = express()
const socket = require('socket.io')
const path = require('path')
const cookieParser = require('cookie-parser')
const feedRouter = require('./config/questionRouter')
const userRouter = require('./config/userRouter')
const commentRouter = require('./config/commentRouter')
const http = require('http')
const server = http.createServer(app)

// Connect to DB

require('dotenv').config()
require('./models/mongoose')

// Middelware

app.use(express.static('public'))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cookieParser())
app.use(feedRouter)
app.use(userRouter)
app.use(commentRouter)

// View engine

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//listen to Port

server.listen(5000)

