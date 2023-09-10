import app from "./app.js";
import { APP_PORT } from "./config/config.js";

app.listen(APP_PORT || 3000,()=>{
    console.log(`Server Started On http://localhost:${APP_PORT}`)
})