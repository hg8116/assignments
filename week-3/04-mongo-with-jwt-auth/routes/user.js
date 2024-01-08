const { Router } = require("express")
const router = Router()
const userMiddleware = require("../middleware/user")
const { User, Course } = require("../db")
const jwt = require("jsonwebtoken")
const jwtsecret = "superman"

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username
  const password = req.body.password

  await User.create({
    username,
    password,
  })

  res.json("User created successfully")
})

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username
  const password = req.body.password

  const user = await User.findOne({
    username,
    password,
  })

  if (user) {
    const token = jwt.sign(username, jwtsecret)
    req.headers.authorization = `Bearer ${token}`
    res.json({ token })
  } else {
    res.status(401).json("User doesnt exist")
  }
})

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({})
  res.json({ courses })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId
  const token = req.headers.authorization.split(" ")[1]
  const username = jwt.verify(token, jwtsecret).username

  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  )

  res.json("Course purchased successfully")
})

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const token = req.headers.authorization.split(" ")[1]
  const username = jwt.verify(token, jwtsecret).username

  const user = await User.findOne({
    username,
  })

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  })

  res.json({
    courses,
  })
})

module.exports = router
