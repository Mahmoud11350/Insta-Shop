import { Schema, model } from "mongoose";

const CartSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: Number,
  image: String,
  title: String,
  category: String,
  company: String,
  price: String,
  totalPrice: Number,
  userId: String,
});

export default model("Cart", CartSchema);
