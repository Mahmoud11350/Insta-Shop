import { Router } from "express";
import {
  addToCart,
  getCartProducts,
  removeProductFromCart,
  updateCartItem,
} from "../controllers/cartActions.js";

const router = new Router();

router.route("/").get(getCartProducts).post(addToCart);
router.route("/:id").delete(removeProductFromCart);
router.patch("/:id", updateCartItem);

export default router;
