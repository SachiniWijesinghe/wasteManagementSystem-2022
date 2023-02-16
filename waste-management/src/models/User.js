const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
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
    password: {
        type: String,
        required: true
    }



})
const User= mongoose.model("user", UserSchema);
module.exports = User;