import jwt from "jsonwebtoken";

import { resError } from "../utils/errorHandler.js";
import verifiyToken from "../utils/verifyToken.js";

const isAuthenticate = (req, res, next) => {
  //get Token user
  const authToken = req.headers.authorization;

  //check token exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    resError(res, 401, "No token, authorization denied");
  }
  try {
    const token = authToken.split(" ").pop();

    // // verify token validate
    const decode = verifiyToken(token);
    req.user_id = decode.id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      resError(res, 401, "Token is expired");
    }
    resError(res, 401, "Invalid token");
  }
};

export default isAuthenticate;
