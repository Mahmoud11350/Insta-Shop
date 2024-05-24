import { Product } from "@/utils/types";
import { Link } from "react-router-dom";

const RowProduct = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product): JSX.Element => {
        return (
          <Link to={`/products/${product._id}`} key={product._id}>
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
  );
};
export default RowProduct;
