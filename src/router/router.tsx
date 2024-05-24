import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { loader as featuredProductLoader } from "../components/FeaturedProducts";
import { loader as singleProductLoader } from "../pages/[ProductId]";
import { loader as productsLoader } from "../pages/Products";
import Products from "@/pages/Products";
import SingleProduct from "@/pages/[ProductId]";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: featuredProductLoader },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
    ],
  },
]);
