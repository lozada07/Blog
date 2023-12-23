import { errorHandler, resError } from "../utils/errorHandler.js";
import { generateToken } from "../utils/jwt.js";
import bcryptjs from "bcryptjs";
import { response } from "../utils/response.js";
import User from "../models/user.model.js";

export const register = errorHandler(
  async (req, res) => {
    const { email, password, username } = req.body;

    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hashPassword,
    });
    const token = generateToken(newUser);
    const data = { token: token, user: newUser.getPublicFields() };
    response(res, 200, data, "User created successfully");
  },
  "Email already exists",
  409
);

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log("Entre");

  if (!user) {
    return resError(res, 404, "User not found");
  }
  //Compared password
  const IsPasswordMatch = bcryptjs.compareSync(password, user.password);
  if (!IsPasswordMatch) {
    return resError(res, 401, "Invalid credentials");
  }

  //Creater token
  const token = generateToken(user);
  response(res, 200, {
    token: token,
    user: user.getPublicFields(),
  });
};

export const verifiyToken = errorHandler(
  async (req, res) => {
    const { user_id } = req;

    const user = await User.findById(user_id);
    if (!user) {
      resError(res, 404, "Not Found");
    }
    response(res, 200, user.getPublicFields());
  },
  "Not found",
  404
);
