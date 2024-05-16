import { Router } from "express";
import {
  getAllProducts,
  getFeaturedProducts,
  getProduct,
} from "../controllers/productsActions.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getProduct);

export default router;
