const app=require("./app");
const port=5005;
app.listen(port,()=>{
    console.log("server is running at port:",port);
})