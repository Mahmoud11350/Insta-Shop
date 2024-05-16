import dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const connectDB = () => connect(process.env.MONGO_URL);

export default connectDB;
