const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const showroomitemSchema = new Schema({    //object ekk wge
   imageurl: {
      type: String,
      required: true   //backend validations
   },

   itemname: {
      type: String,
      required: true   //backend validations
   },
   quntity: {
      type: String,
      required: true   //backend validations
   },
   price: {
      type: String,
      required: true   //backend validations
   },
   category: {
      type: String,
      required: true   //backend validations
   }
})

//schema ekk kynne databse eke document ekkne create krnne.eke template ekk wge

const Showroomitem = mongoose.model("Showroomitem", showroomitemSchema);
module.exports = Showroomitem;         //tble name //schema name
                //28 const variable eka