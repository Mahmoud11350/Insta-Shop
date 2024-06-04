import BADREQUESTERROR from "../errors/badRequestError.js";
import Cart from "../models/Cart.js";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  const product = req.body;
  product.totalPrice = product.price * product.amount;
  const cartItem = await Cart.create(product);
  res.status(StatusCodes.CREATED).json({ cartItem });
};

export const getCartProducts = async (req, res) => {
  const cart = await Cart.find();
  res.status(StatusCodes.OK).json({ cart });
};

export const removeProductFromCart = async (req, res) => {
  const cartItemId = req.params.id;
  const isIncart = await Cart.findOne({ _id: cartItemId });
  if (isIncart) {
    await Cart.deleteOne({ _id: cartItemId });
    res.status(StatusCodes.OK).json({ msg: "cart item deleted " });
  }
  throw new BADREQUESTERROR("can't find product in cart");
};

export const updateCartItem = async (req, res) => {
  const data = req.body;
  const cartItem = await Cart.findOne({ _id: req.params.id });
  console.log(cartItem);
  const totalPrice = parseInt(cartItem.price) * parseInt(data.amount);
  const updatedCartItem = await Cart.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { ...data, totalPrice }
  );
  res.status(StatusCodes.OK).json({ updatedCartItem });
};
