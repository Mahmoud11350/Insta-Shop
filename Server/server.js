import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import connectDB from "./db/connect.js";
import cookieParser from "cookie-parser";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import cors from "cors";

// Import Routes
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import errorMiddleware from "./middleware/errorsMiddleware.js";
const app = express();

// Pre Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

// Post Middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT | 3000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server runing on port ${PORT}`);
    });
  } catch (error) {
    console.log(`something went wrong`);
  }
};

startServer();
