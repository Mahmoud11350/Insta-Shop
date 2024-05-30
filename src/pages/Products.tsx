import { Product } from "@/utils/types";
import customFetch from "@/utils/customFetch";
import RowProduct from "@/components/RowProduct";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import PageSelect from "@/components/PageSelect";
import SearchContainer from "@/components/SearchContainer";

export const loader: LoaderFunction = async ({
  request,
}): Promise<{
  products: Product[];
  catigories: string[];
  compines: string[];
}> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const {
    data: { products: allProducts },
  } = await customFetch("/products");

  const {
    data: { products },
  } = await customFetch("/products", { params });
  const catigories = [
    ...new Set(allProducts.map((product: Product) => product.category)),
  ] as string[];
  const compines = [
    ...new Set(allProducts.map((product: Product) => product.company)),
  ] as string[];
  return { products, catigories, compines };
};

const Products = () => {
  const { products } = useLoaderData() as { products: Product[] };
  return (
    <>
      <section className="wrapper">
        <SearchContainer />
        <RowProduct products={products} />
        <PageSelect />
      </section>
    </>
  );
};
export default Products;
