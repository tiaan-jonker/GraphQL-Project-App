const mongoose = require('mongoose')
const { Schema } = mongoose

const ClientSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
})

module.exports = mongoose.model('Client', ClientSchema)
