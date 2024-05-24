import { Product } from "@/utils/types";

export type ProductInitalState = {
  products: Product[];
  page: 1 | 2 | 3;
};
export let productInitialState: ProductInitalState = {
  products: [],
  page: 1,
};
