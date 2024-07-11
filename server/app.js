const express=require("express");
const authrouter = require("./router/routes.js");
const fileUpload=require("express-fileupload");
const cors = require('cors');
const app=express();
app.use(express.json());
app.use(fileUpload());
app.use(cors({
    origin: '*'
}));

app.use("/",authrouter
);

module.exports = app;