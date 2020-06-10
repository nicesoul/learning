const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/API/items');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

// database config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('MondoDB connected')).catch(err => console.log(err));

// routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
