import mongoose from "mongoose";

const UserModal = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
});

//Methods
UserModal.methods.getPublicFields = function () {
  const user = {
    _id: this._id,
    email: this.email,
    username: this.username,
    photo: this.photo,
  };

  return user;
};
export default mongoose.model("User", UserModal);
