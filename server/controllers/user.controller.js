import User from "../models/user.model.js";
import { cloudinaryDelete } from "../utils/Cloudinary.js";
import { errorHandler, resError } from "../utils/errorHandler.js";
import { response } from "../utils/response.js";
import bcryptjs from "bcryptjs";

export const updateUser = errorHandler(
  async (req, res) => {
    const { user_id } = req;
    const user = await User.findById(user_id);
    if (req.body.photo) {
      cloudinaryDelete(user.photo.public_id);
    }

    if (req.body.password && req.body.newPassword) {
      const password = req.body.password;
      const IsPasswordMatch = bcryptjs.compareSync(password, user.password);
      if (!IsPasswordMatch) {
        return resError(res, 400, "Invalid password");
      }
      const hashPassword = bcryptjs.hashSync(req.body.newPassword, 10);
      req.body.password = hashPassword;
    }
    const newUser = await User.findByIdAndUpdate(
      user_id,
      { $set: req.body },
      { new: true }
    );
    response(res, 200, newUser.getPublicFields());
  },
  "User not found",
  404
);
