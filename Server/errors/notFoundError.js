import { StatusCodes } from "http-status-codes";
import CUSTOMERR from "./customError.js";

class NOTFOUNDERROR extends CUSTOMERR {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NOTFOUNDERROR;
