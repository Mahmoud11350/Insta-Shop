import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";
import NOTFOUNDERROR from "../errors/notFoundError.js";
export const getAllProducts = async (req, res) => {
  const { title, category, company, shipping, orderBy } = req.query;
  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (category && category !== "all") {
    queryObject.category = category;
  }
  if (company && company !== "all") {
    queryObject.company = company;
  }

  if (shipping) {
    queryObject.shipping = shipping ? true : false;
  }
  if (orderBy && orderBy !== "all") {
    queryObject.orderBy = orderBy == "a-z" ? "" : "";
  }
  const numOfPrducts = await Product.countDocuments();
  const allProducts = Product.find(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  let products = await allProducts.limit(limit).skip(skip);

  res.status(StatusCodes.OK).json({ products, numOfPrducts: numOfPrducts });
};

export const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({
    featured: true,
  });
  res.status(StatusCodes.OK).json({ featuredProducts });
};

export const getProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOne({ _id: productId });
  if (!product) throw new NOTFOUNDERROR(`no product with id ${productId}`);
  res.status(StatusCodes.OK).json({ product });
};
