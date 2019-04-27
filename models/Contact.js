const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const contactSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      required: true, 
      ref: "User"
    },
    name: {
      type: String, 
      required: true, 
    }, 
    lastname: {
      type: String
    }, 
    email: {
      type: String,
      required: true, 
      unique: true
    },
  business: {
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: "Business"
  }
  },
  { timestamps: true }
);