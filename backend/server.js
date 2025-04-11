const express= require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const redirectRoute=require('./routes/redirect');

dotenv.config();
const app=express();

const PORT= process.env.PORT || 5000;

app.use(cors());
app.use('/',redirectRoute);
app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
})