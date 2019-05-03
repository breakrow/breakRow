const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

const customerSchema = new Schema({
  businessID:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"User"
  },
  fullname:{
    type: String,
    required:true
  }, 
  email:{
    type: String,
    requiered:true
  },
  cellphone:{
    type:Number
  },
  comment:{
    type: String
  }    
}, 
  {timestamps: true}
);

module.exports = mongoose.model("Customer", customerSchema);