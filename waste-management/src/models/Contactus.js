const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactusSchema = new Schema({    //object ekk wge
cname :{
    type: String,
    required:true   //backend validations
 },
 email :{
    type: String,
    required:true   //backend validations
 },
 contact :{
    type: String,
    required:true   //backend validations
 },
 message :{
    type: String,
    required:true   //backend validations
 }


})

//schema ekk kynne databse eke document ekkne create krnne.eke template ekk wge

const Contactus= mongoose.model("Contactus",contactusSchema);
module.exports=Contactus;         //tble name //schema name
                //28 const variable eka