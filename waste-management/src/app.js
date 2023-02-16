// import { express } from "express";
const express = require('express');
//import { cors } from "cors";
const cors = require("cors");
import 'dotenv/config';
import logger from './utils/logger';
import { connect } from './utils/database.connection';
var bodyParser = require('body-parser');

var multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({    //frntend eken ena request object eka,file,return value
    destination: function (req, file, cb) {
    cb(null, './src/assert')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage });

var types = upload.single('file');


const app = express();
const PORT = process.env.PORT || "9090";

app.use(cors());
app.use(bodyParser.json());
app.use('/src/assert',express.static('./src/assert'));
app.get("/", (req, res, next) => {
    res.send("<h2>test 1 </h2>");
    next();
});



const requestformrRouter = require("./routes/requestfoms");
app.use("/requestform", requestformrRouter);

const Categoryrouter = require("./routes/Categories");
app.use("/Category", Categoryrouter);


const SubCategoryrouter = require("./routes/Subcategories");
app.use("/SubCategory", SubCategoryrouter);



const contactusRouter = require("./routes/contactuss.js");   //this is our middleware to connect routers and model
app.use("/contactus",contactusRouter);

const showroomitemRouter = require("./routes/showroomitem.js");
app.use("/showroomitem",types,showroomitemRouter);

app.listen(PORT, () => {
    logger.info(`🚀 server is up an running on PORT ${ PORT } `);
    connect();

});