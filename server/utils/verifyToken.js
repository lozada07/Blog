import jwt from "jsonwebtoken";
const verifiyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export default verifiyToken;
