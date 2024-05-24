import { Product } from "@/utils/types";
import customFetch from "@/utils/customFetch";
import RowProduct from "@/components/RowProduct";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import PageSelect from "@/components/PageSelect";

export const loader: LoaderFunction = async ({
  request,
}): Promise<Product[]> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const {
    data: { products },
  } = await customFetch("/products", { params });
  return products;
};

const Products = () => {
  const products = useLoaderData() as Product[];
  return (
    <>
      <section className="wrapper">
        <RowProduct products={products} />
        <PageSelect />
      </section>
    </>
  );
};
export default Products;
