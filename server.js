const express = require('express');
const app = express()
require('./database/connection');
require('dotenv').config();
app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log('INFO  Server running on '+ process.env.PORT);
})