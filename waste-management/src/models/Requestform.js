const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Reqformschema = new schema({
    name: {
        type: String,
        required: true
    },
    Contactnumber: {

        type: Number,
        required: true

    },

    address: {
        type: String,
        required: true
    },
    Categoryname:{
        type:String,
        required:true
    },
    SubCategoryname:{
        
        type:String,
        required:true
    },
    approximatewaight: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }



})
const Requestform = mongoose.model("Requestform", Reqformschema);
module.exports = Requestform;