const express = require('express');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/erorrMiddleware')
const port = process.env.PORT || 5000

const app = express();


// @desc Accepts body post
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoute'))

// @desc implement default error handling in express
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Port listen to port ${port}`)
})