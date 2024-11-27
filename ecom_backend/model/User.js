const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
    
  },
 
  
  mobile:{
    type:String,
    unique:true,
    
  },
 
  
  fullname: {
    type: String,
    required:true
  },
  

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }, // Role field
 
})

module.exports = mongoose.model('User', userSchema)