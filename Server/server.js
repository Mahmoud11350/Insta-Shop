import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import User from "./models/User.js";
import connectDB from "./db/connect.js";
import cookieParser from "cookie-parser";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import bodyParser from "body-parser";
import { Webhook } from "svix";
import cors from "cors";

// Import Routes
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import errorMiddleware from "./middleware/errorsMiddleware.js";
import { StatusCodes } from "http-status-codes";

const app = express();

// Pre Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);

app.use(bodyParser.raw({ type: "application/json" }));

app.post("/api/webhooks", async function (req, res) {
  const payloadString = JSON.stringify(req.body);
  const svixHeaders = req.headers;
  const svix_id = svixHeaders["svix-id"];
  const svix_timestamp = svixHeaders["svix-timestamp"];
  const svix_signature = svixHeaders["svix-signature"];

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
  try {
    const evt = wh.verify(payloadString, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
    if (evt.type === "user.created") {
      const { first_name, last_name, id, image_url, email_addresses } =
        evt.data;
      const isFirstEmail = (await User.countDocuments()) === 0;
      const role = isFirstEmail ? "admin" : "user";
      const email = email_addresses[0]["email_address"];
      const isEmailExist = await User.findOne({ email_addresses: email });
      if (isEmailExist) return;

      const user = await User.create({
        first_name,
        last_name,
        id,
        image_url,
        role,
        clerkId: id,
        email_addresses: email.toString(),
      });
      console.log("user created");
      return res.status(StatusCodes.CREATED).json({ user });
    }
    if (evt.type == "user.deleted") {
      const { id: clerkId } = evt.data;
      console.log(clerkId);
      await User.findOneAndDelete({ clerkId });
      console.log("user deleted");
      return res.status(StatusCodes.OK).json({ msg: "user deleted" });
    }
    res.status(200).send("Webhook received successfully");
  } catch (error) {
    console.error("Verification failed:", error.message);
    res.status(400).send("Verification failed");
  }
});

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
