import { Product } from "@/utils/types";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import customFetch from "@/utils/customFetch";
import RowProduct from "./RowProduct";

export const loader: LoaderFunction = async (): Promise<Product[]> => {
  const {
    data: { featuredProducts },
  } = await customFetch("/products/featured");

  return featuredProducts;
};

const FeaturedProducts = () => {
  const products = useLoaderData() as Product[];
  return (
    <section className="">
      <div className="wrapper">
        <h1 className="h3-bold mb-4">Featured Product</h1>
        <hr className="mb-10" />
        <RowProduct products={products} />
      </div>
    </section>
  );
};
export default FeaturedProducts;
