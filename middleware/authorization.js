const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config')

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization
  if(!header) {
    res.json({
      messsage: "undefined headeer"
    })
  }

  const token = header.split(" ")[1]

  if(!token) throw new Error("invalid token")
  const payload = jwt.verify(token, JWT_KEY)
  
  // console.log("PAYYLOAD", payload);
  req.payload = payload

  next()
}

module.exports = verifyToken