import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err, req, res, next) => {
  let customError = {
    message: err.message || "something went wrong try again later",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  if (err && err.name === "ValidationError") {
    // console.log(Object.values(err).map(err)=>err.name);
    customError.message = Object.values(err.errors)
      .map((error) => error.message)
      .join(" & ");
  }
  if (err.name === "CastError") {
    customError.message = "invalid id";
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  // return res.json(err);

  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

export default errorMiddleware;
