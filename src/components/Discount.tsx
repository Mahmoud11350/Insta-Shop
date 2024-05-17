import { Link } from "react-router-dom";
import discountImg from "../assets/img/discount-img.png";
const Discount = () => {
  return (
    <section>
      <div className="wrapper flex justify-between items-center">
        <div className="text-center flex-1">
          <h1 className="h3-bold">
            The Latest Collection{" "}
            <span className="block text-green-400">50% DISCOUNT</span>
          </h1>
          <Link
            to={"/products"}
            className="px-4 py-2 bg-gray-900 text-center rounded text-white mt-4 w-fit m-auto block"
          >
            Buy Now
          </Link>
        </div>
        <div>
          <img src={discountImg} />
        </div>
      </div>
    </section>
  );
};
export default Discount;
