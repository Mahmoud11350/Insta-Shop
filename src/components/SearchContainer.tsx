import {
  ActionFunction,
  Form,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import FormRow from "./FormRow";
import SelectRow from "./SelectRow";
import { Button } from "./ui/button";
import FreeShippingCheck from "./FreeShippingCheck";

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
  const navigate = useNavigate();
  return (
    <Form className="p-8">
      <div>
        <div className="grid grid-cols-4 gap-6 items-center justify-between">
          <FormRow
            name="title"
            label="Search Product"
            type="text"
            placeholder="Search Product"
          />
          <SelectRow
            name="category"
            placeholder="Select Category"
            data={catigories}
          />
          <SelectRow
            name="company"
            placeholder="Select Company"
            data={compines}
          />
          <SelectRow name="orderBy" placeholder="Order By" />
          <FreeShippingCheck />
          <Button type="submit" className="bg-green-500 col-start-3">
            submit
          </Button>
          <Button
            type="reset"
            className="bg-red-500"
            onClick={() => navigate("/products")}
          >
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default SearchContainer;
