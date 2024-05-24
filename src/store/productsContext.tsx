import { reducerFn } from "@/reducer/reducerFn";
import { Product } from "@/utils/types";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { productInitialState } from "./state/initalState";

type ProductInitalState = {
  products: Product[];
  numOfProducts: number;
  page: 1 | 2 | 3;
};
const ProductContext = createContext<ProductInitalState | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerFn, productInitialState);
  //
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductContext);
