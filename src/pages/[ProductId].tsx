import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Product } from "@/utils/types";
import customFetch from "@/utils/customFetch";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const loader: LoaderFunction = async ({
  params,
}): Promise<Product[]> => {
  const {
    data: { product },
  } = await customFetch(`/products/${params.id}`);
  return product;
};
const SingleProduct = () => {
  const product = useLoaderData() as Product;

  return (
    <section>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
        </div>
        <div className="">
          <h2 className="h5-bold capitalize">{product.title}</h2>
          <h4 className="p-regular-20 capitalize">{product.category}</h4>
          <span className="p-regular-16 bg-green-400/40 py-1 px-3 rounded-lg block w-fit my-2">
            $ {product.price}
          </span>
          <p className="p-regular-18 mt-8">{product.description}</p>
          <div className="mt-4">
            <h4 className="p-bold-16  ">Colors</h4>
            <ul className="flex gap-4 my-4">
              {product.colors.map((color) => (
                <li
                  className={`w-6 h-6 rounded-full `}
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="p-bold-16  ">Amount</h4>
            <Select defaultValue="1">
              <SelectTrigger className="w-[180px] mt-4">
                <SelectValue placeholder={1} />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }).map((_, index) => {
                  const selectedValue = (index += 1).toString();
                  return <SelectItem value={selectedValue}>{index}</SelectItem>;
                })}
              </SelectContent>
            </Select>
          </div>
          <Link
            to="/cart"
            className="mt-8 py-2 px-6 bg-green-400 block w-fit rounded p-bold-16"
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
