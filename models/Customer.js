const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

const customerSchema = new Schema({
  
  fullName:{
    type: String,
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
  },
  business: { // User model
    type: Schema.Types.ObjectId, 
    requiered: true,
    ref: "Business"
  }
  
}, 
  {timestamps: true}
);

mongoose.exports = mongoose.model("Customer", customerSchema);