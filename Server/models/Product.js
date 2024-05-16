import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: String,
  company: String,
  description: String,
  featured: Boolean,
  category: String,
  image: String,
  price: String,
  shipping: Boolean,
  colors: Schema.Types.Array,
});

export default model("Product", productSchema);
