
// Business Model - Snipet

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const businessSchema = new Schema(
  {
    company: {
      type: Schema.Types.ObjectId, 
      required: true,
      ref: "User"
    }, 
     phonenumber: {
      type: Number, 
      required: true
    },
    location:{
      type: {
        type: String, 
        default: "Point"
      },
      address: {
        type: String
      },
        coordinates: {
        type: [Number]
      }
    },
    description: {
      type: String
    }, 
    images: {
      type: [String], 
      required: true
    }

  }, 
  { timestamps: true}
);
businessSchema.index({
  location: "2dsphere"
});

module.exports = mongoose.model("Business", businessSchema)