const { Router, json } = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin, User, Course } = require("../db")
const router = Router()
const jwt = require("jsonwebtoken")
const jwtsecret = "superman"

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username
  const password = req.body.password

  await Admin.create({
    username,
    password,
  })

  res.json("Admin created successfully")
})

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username
  const password = req.body.password

  const user = await Admin.findOne({
    username,
    password,
  })

  if (user) {
    const token = jwt.sign(username, jwtsecret)
    req.headers.authorization = `Bearer ${token}`
    res.json(token)
  } else {
    res.status(401).json("Admin doesnt exist")
  }
})

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title
  const description = req.body.description
  const imageLink = req.body.imageLink
  const price = Number(req.body.price)

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  })

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  })
})

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({})
  res.json(courses)
})

module.exports = router
