const jwt = require("jsonwebtoken")
const jwtsecret = "superman"

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization.split(" ")[1]
  try {
    const decode = jwt.verify(token, jwtsecret)
    if (decode.username) next()
    else {
      res.status(403).json("You are not authenticated")
    }
  } catch (err) {
    res.json("Incorrect inputs")
  }
}

module.exports = adminMiddleware
