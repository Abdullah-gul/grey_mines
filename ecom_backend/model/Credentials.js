const mongoose = require('mongoose')

const credentialsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  role:{
    type:String
  },
  
})

module.exports = mongoose.model('Credentials', credentialsSchema)