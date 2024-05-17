import { Product } from "@/utils/types";
import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import customFetch from "@/utils/customFetch";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product): JSX.Element => {
            return (
              <Link to={`/products/${product._id}`}>
                <div className="p-4 rounded border text-center">
                  <img src={product.image} className="h-52 w-full rounded-lg" />
                  <h2 className="p-regular-20 capitalize mt-4 mb-2 ">
                    {product.title}
                  </h2>
                  <p className="p-regular-18 capitalize mb-4 text-green-400">
                    $ {product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
