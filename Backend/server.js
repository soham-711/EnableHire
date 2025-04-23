const express = require('express');
const connectDB = require('./DB/Db');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyparser = require('body-parser')
const seekerauthRoute = require('./Routes/authRoute')
const resumeRoutes = require('./Routes/resumeRoute');



const port = process.env.PORT || 5000



app.get('/pinki',(req,res)=>{
    res.send('Ponky')
})

app.use(cors());
app.use(bodyparser.json())
app.use(express.json());

app.use('/auth',seekerauthRoute);
app.use('/resume',resumeRoutes)

connectDB();
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})