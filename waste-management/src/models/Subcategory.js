const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SubCategoryschema = new schema({
    SubCategoryname: {
        type: String,
        required: true,
       

    },
    Categoryname:{
        type: String,
        required: true,
    }


})
const SubCategorydoc = mongoose.model("SubCategorydoc", SubCategoryschema);
module.exports = SubCategorydoc;