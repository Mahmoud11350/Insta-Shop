import bcryptjs from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "user name is required"],
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    minLength: 3,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: 6,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.methods.comparePasswords = async function (password) {
  const isPasswordCorrect = await bcryptjs.compare(password, this.password);
  return isPasswordCorrect;
};
userSchema.pre("save", async function () {
  const salt = await bcryptjs.genSalt(8);
  this.password = await bcryptjs.hash(this.password, salt);
});

export default model("User", userSchema);
