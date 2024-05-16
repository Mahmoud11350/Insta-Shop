import jwt from "jsonwebtoken";

const createTokenUser = (user) => {
  return {
    name: user.name,
    _id: user._id,
  };
};

export const createToken = async (user) => {
  const tokenUser = createTokenUser(user);
  const token = jwt.sign(tokenUser, process.env.JWTSECRET);
  return token;
};

export const attachCookieToRes = ({ res, token }) => {
  res.cookie("token", token);
};
