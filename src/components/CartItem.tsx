import { CartItemType } from "@/utils/types";
import AmountSelect from "./AmountSelect";
import { Button } from "./ui/button";

import { FormEvent } from "react";
import customFetch from "@/utils/customFetch";
import { Link, useNavigate } from "react-router-dom";

const CartItem = ({
  _id,
  amount,
  image,
  title,
  company,
  totalPrice,
}: CartItemType) => {
  const navigate = useNavigate();
  const handleFormChange = async (
    e: FormEvent<HTMLFormElement>,
    _id: string
  ) => {
    e.preventDefault;
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    await customFetch.patch(`/cart/${_id}`, data);
    navigate("/cart");
  };

  return (
    <div className="p-4 mb-4 rounded border grid grid-cols-2  gap-8 items-center justify-between md:grid-cols-4">
      <img src={image} className="h-36 w-full rounded-lg" />
      <div>
        <h3 className="p-regular-24 capitalize mb-2">{title}</h3>
        <h5 className="p-regular-18">{company}</h5>
        <div className="flex items-center gap-4">
          <h5>Color :</h5>
          <ul>
            <li>color</li>
          </ul>
        </div>
      </div>

      <form
        className="flex gap-2 items-center"
        onChange={(e) => handleFormChange(e, _id)}
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/cart");
        }}
      >
        <AmountSelect defaultValue={amount.toString()} />
        <Button
          className="bg-red-500"
          onClick={() => customFetch.delete(`/cart/${_id}`)}
        >
          Remove
        </Button>
      </form>

      <p className="p-regular-20 text-center">Total Price : $ {totalPrice}</p>
    </div>
  );
};
export default CartItem;
