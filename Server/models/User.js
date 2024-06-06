import bcryptjs from "bcryptjs";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    minLength: 3,
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    minLength: 3,
  },
  image_url: {
    type: String,
    required: [true, "last name is required"],
  },
  email_addresses: {
    type: String,
    required: [true, "email_addresses is required"],
    minLength: 3,
    unique: true,
  },

  clerkId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.methods.comparePasswords = async function (password) {
  const isPasswordCorrect = await bcryptjs.compare(password, this.password);
  return isPasswordCorrect;
};

export default model("User", userSchema);
