const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/erorrMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// @desc connecting to mongo database
connectDB();

const app = express();


// @desc Accepts body post
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoute'))
app.use('/api/users', require('./routes/userRoute'))


// @desc implement default error handling in express
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Port listen to port ${port}`)
})