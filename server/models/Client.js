const mongoose = require('mongoose')
const { Schema } = mongoose

const ClientSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
})

module.exports = mongoose.model('Client', ClientSchema)
