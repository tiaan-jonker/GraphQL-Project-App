const mongoose = require('mongoose')
const { Schema } = mongoose

const ClientSchema = Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  remuneration: {
    type: String,
    enum: ['Paid', 'Pro-bono'],
  },
  urgent: {
    type: Boolean,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
})

module.exports = mongoose.model('Project', ClientSchema)
