const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Categoryschema = new schema({
    Categoryname: {
        type: String,
        required: true
    }
})
const Categorydoc = mongoose.model("Categorydoc", Categoryschema);
module.exports = Categorydoc;