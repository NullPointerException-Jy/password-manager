const jwt = require("jsonwebtoken");
const jwtKey = "123456789abcdefg"; // 将密钥写死
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token,jwtKey);
    req.user = { id: decodedToken.id };
  } catch (error) {
    return res.status(401).json({ error: " Authentication failed!" });
  }
  next();
};

module.exports = auth;
