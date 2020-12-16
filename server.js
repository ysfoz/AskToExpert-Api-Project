const express = require('express');
require('dotenv').config();
const router = require('./routes');


const app = express();
const PORT = process.env.PORT || 5005

app.use('/api', router)


app.listen(PORT,() =>{
    console.log(`App connected to server on port ${PORT} successfully`)
})