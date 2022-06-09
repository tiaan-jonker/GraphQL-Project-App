const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    )
  } catch (error) {
    console.error(`Database error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
