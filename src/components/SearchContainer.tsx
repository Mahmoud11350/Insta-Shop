import { ActionFunction, Form, useLoaderData } from "react-router-dom";
import FormRow from "./FormRow";
import SelectRow from "./SelectRow";
import { Checkbox } from "@/components/ui/checkbox";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

const SearchContainer = () => {
  const { catigories, compines } = useLoaderData() as {
    catigories: string[];
    compines: string[];
  };
  return (
    <Form className="py-8">
      <div>
        <div className="grid grid-cols-4 gap-4 items-center justify-between">
          <FormRow
            name="search"
            label="Search Product"
            type="text"
            placeholder="Search Product"
          />
          <SelectRow name="category" placeholder="Category" data={catigories} />
          <SelectRow
            name="company"
            placeholder="Select Company"
            data={compines}
          />
          <SelectRow name="orderBy" placeholder="Order By" />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" name="shipping" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Free Shipping
            </label>
          </div>
        </div>
      </div>
      <button type="submit">submit</button>
    </Form>
  );
};
export default SearchContainer;
