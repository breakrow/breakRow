const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(
  {
  name: {
    type: String, 
    required: true, 
  }, 
  email: {
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  customers:{
    type:[String]
  }
}, {timestamps: true}
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  hashField: "password"
});

module.exports = mongoose.model("User", userSchema);