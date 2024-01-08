const jwt = require("jsonwebtoken")
const jwtsecret = "superman"

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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

module.exports = userMiddleware
