const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const queueSchema = new Schema(
  {
  businessName: {
    type: String, 
    required: true, 
  }, 
  businessID: {
    type: Schema.Types.ObjectId,
    required: true, 
    ref:"User"
  },
  customers:{
    type:[String]
  }
}, {timestamps: true}
);


module.exports = mongoose.model("Queue", queueSchema);