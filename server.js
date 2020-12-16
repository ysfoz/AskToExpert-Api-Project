const express = require('express');
require('dotenv').config();
const router = require('./routes');
const connectDatabase = require('./helpers/database/connectDatabase')
const customErrorHandler = require('./middleware/errors/customErrorHandler')

const app = express();
const PORT = process.env.PORT || 5005

// Database Connection
connectDatabase()

app.use('/api', router);
app.use(customErrorHandler);


app.listen(PORT,() =>{
    console.log(`App connected to server on port ${PORT} successfully`)
})