import { resError } from "../utils/errorHandler.js";

const isOwner = (schema) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const model = await schema.findById(id);
    if (!model) {
      return resError(res, 404, "Not found");
    }

    if (model.author_id.toString() !== req.user_id) {
      return resError(res, 401, "Not found");
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default isOwner;
