import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  console.log(process.env.JWT_SECRET_KEY);
  return jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};


export const verifyToken = (token) => {
  
  return jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

