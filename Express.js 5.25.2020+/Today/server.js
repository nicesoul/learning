/*

import modules
{express,mongoose,body-parser}

*/

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json())


// import routes
const postRoute = require('./routes/post')

app.use('/post', postRoute)

app.get('/', (req, res) => {
    res.send('homepage')
})

// mongoDB connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to mongoDB')
)

app.listen(5007)