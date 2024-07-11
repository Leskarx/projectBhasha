const express =require("express");
const { check,detectPdf,translate} = require("../controller/controles.js");
const authrouter=express.Router();
authrouter.get("/check",check);
authrouter.post("/pdf",detectPdf);
authrouter.post("/translate",translate);


module.exports=authrouter;  