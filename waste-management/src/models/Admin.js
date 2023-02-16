const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AdminSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
    address: {
        type: String,
        required: true
    },
    phoneNumber: {

        type: Number,
        required: true

    },
   


})
const Admin= mongoose.model("admin", AdminSchema);
module.exports = Admin;