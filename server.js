const express = require('express');
require('dotenv').config();
const router = require('./routes');
const connectDatabase = require('./helpers/database/connectDatabase')
const customErrorHandler = require('./middleware/errors/customErrorHandler')

const app = express();
const PORT = process.env.PORT || 5005

// Express-Body middleware read to json obj

app.use(express.json())

// Database Connection
connectDatabase()

// Router
app.use('/api', router);

// Error Hnadler
app.use(customErrorHandler);


app.listen(PORT,() =>{
    console.log(`App connected to server on port ${PORT} successfully`)
})