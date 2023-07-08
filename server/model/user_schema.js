const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    reuired: true,
    trim: true,
    min: 5,
    max: 20,
  },
  lastname: {
    type: String,
    reuired: true,
    trim: true,
    min: 5,
    max: 20,
  },
  username: {
    type: String,
    reuired: true,
    trim: true,
    unique : true,
    index :true,
    lowercase : true,
   
  },
  email: {
    type: String,
    reuired: true,
    unique : true,
    trim: true,
    lowercase : true
  },
  password: {
    type: String,
    reuired: true,

  },
  phone: {
    type: String,
    reuired: true,
  },
});


const user = mongoose.model("user",userSchema);

module.exports = user
