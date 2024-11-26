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
 
  
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }, // Role field
 
})

module.exports = mongoose.model('User', userSchema)