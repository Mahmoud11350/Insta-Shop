import { Checkbox } from "./ui/checkbox";

const FreeShippingCheck = () => {
  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Free Shipping
      </label>
      <Checkbox id="terms" name="shipping" />
    </div>
  );
};
export default FreeShippingCheck;
