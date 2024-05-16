import { StatusCodes } from "http-status-codes";
const notFoundMiddleware = (req, res) =>
  res.status(StatusCodes.BAD_REQUEST).json({
    message: "invaled route",
  });

export default notFoundMiddleware;
