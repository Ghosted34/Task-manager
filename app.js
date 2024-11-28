const express = require("express");
const connectDB = require("./db/connect")
const app = express();
const tasks= require("./routes/task")
require('dotenv').config()
//middleware
app.use(express.json())



//route
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})
app.use("/api/v1/tasks", tasks)
const port = 3000;



const start = async()=>{
   try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`))
   }
    catch(error){
        console.log(error)
         
    }

}

start()