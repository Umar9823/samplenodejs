import { app } from "./app.js";
import { port } from "./app.js";
app.get("/",(req,res)=>{
    res.send("<h1>Hello From the Server </h1>");
});

app.route("/users").get((req,res,next)=>{
    res.status(200).json({
        users:[],
        success:false,
    });
});

app.listen(port,()=>{
    console.log(`Server is working on port ${port}`);
});