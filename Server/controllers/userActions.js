import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import BADREQUESTERROR from "../errors/badRequestError.js";
import { attachCookieToRes, createToken } from "../utils/tokenHandler.js";
export const createUser = async (req, res) => {
  const isFirstEmail = (await User.countDocuments()) === 0;

  req.body.role = isFirstEmail ? "admin" : "user";
  const userAlreadyExist = await User.findOne({ email: req.body.email });
  if (userAlreadyExist) {
    throw new BADREQUESTERROR("Email Already Exist");
  }
  const user = await User.create(req.body);
  const token = await createToken(user);
  await attachCookieToRes({ res, token });
  return res.status(StatusCodes.CREATED).json({ user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BADREQUESTERROR("wrong email");
  }
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new BADREQUESTERROR("wrong password");
  }
  const token = await createToken(user);
  await attachCookieToRes({ res, token });
  return res.status(StatusCodes.OK).json({ user });
};

export const logoutUser = async (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  return res.status(StatusCodes.OK).json({ message: "User Logged OUT " });
};
