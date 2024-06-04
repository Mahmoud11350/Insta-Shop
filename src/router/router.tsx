import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { loader as featuredProductLoader } from "../components/FeaturedProducts";
import { loader as singleProductLoader } from "../pages/[ProductId]";
import { loader as productsLoader } from "../pages/Products";
import { loader as cartLoader } from "../pages/Cart";
import { action as formAction } from "../components/SearchContainer";
import { action as productAction } from "../pages/[ProductId]";
// import { action as cartItemAction } from "../components/CartItem";
import Products from "@/pages/Products";
import SingleProduct from "@/pages/[ProductId]";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";

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
        action: formAction,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        action: productAction,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: cartLoader,
        // action: cartItemAction,
      },
    ],
  },
  {
    path: "sign-in",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
