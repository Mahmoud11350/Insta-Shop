import CartItem from "@/components/CartItem";
import customFetch from "@/utils/customFetch";
import { Product } from "@/utils/types";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async () => {
  const {
    data: { cart },
  } = await customFetch("/cart");
  return cart;
};
const Cart = () => {
  const cart = useLoaderData() as Product & { amount: string | number }[];
  if (cart.length == 0) {
    return (
      <div className="grid items-center justify-center text-center flex-1 mt-8">
        <h3 className="p-medium-20 ">Cart Is Empty</h3>{" "}
        <Link
          to={"/products"}
          className="mt-4 py-2 px-4 bg-green-500 rounded p-medium-18 text-white"
        >
          Fill It
        </Link>
      </div>
    );
  }
  return (
    <section className="wrapper mt-8">
      <h2 className="h2-bold">Shopping Cart</h2>
      <hr className="mt-4" />
      <div className="mt-8">
        {cart.map((cartItem) => (
          <CartItem {...cartItem} />
        ))}
      </div>
    </section>
  );
};
export default Cart;
