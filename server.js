const express = require('express');
require('dotenv').config();
const router = require('./routes');
const connectDatabase = require('./helpers/database/connectDatabase')

const app = express();
const PORT = process.env.PORT || 5005

// Database Connection
connectDatabase()

app.use('/api', router)


app.listen(PORT,() =>{
    console.log(`App connected to server on port ${PORT} successfully`)
})