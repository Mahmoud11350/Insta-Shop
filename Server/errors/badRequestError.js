import { StatusCodes } from "http-status-codes";
import CUSTOMERR from "./customError.js";

class BADREQUESTERROR extends CUSTOMERR {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BADREQUESTERROR;
