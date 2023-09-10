import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  backendApi from "./routes/BackendApi.js";
const app = express();

app.use(bodyParser.json())
app.use('/api/v1',backendApi)



const DB_URL = "mongodb+srv://<username>:<password>@cluster0.ezckhds.mongodb.net/db-me-portfolio";
    const options = {
        user:"milonkumar",
        pass:"65KUMARdev",
        autoIndex:true,
    }
    mongoose.connect(DB_URL,options).then(()=>{
        console.log("Database Connection Success");
    }).catch((e)=>{
        console.log('Database Connection Fail');
        console.log(e);
    })





app.use('*',(req,res)=>{
    return res.status(404).json({
        success:true,
        message:"Page Note Found"
    })
})

export default app;