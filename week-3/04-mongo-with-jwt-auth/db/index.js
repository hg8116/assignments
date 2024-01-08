const mongoose = require("mongoose")
require("dotenv").config()
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db is connected successfully"))
  .catch((err) => console.log("connection failed", err))

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
})

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  imageLink: String,
  price: Number,
})

const Admin = mongoose.model("Admin", AdminSchema)
const User = mongoose.model("User", UserSchema)
const Course = mongoose.model("Course", CourseSchema)

module.exports = {
  Admin,
  User,
  Course,
}
