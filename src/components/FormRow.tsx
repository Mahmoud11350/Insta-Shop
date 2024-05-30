import { Input } from "@/components/ui/input";

type InputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
};
const FormRow = ({ name, type, placeholder }: InputProps) => {
  return (
    <div className="">
      <Input type={type} id={name} placeholder={placeholder} name={name} />
    </div>
  );
};
export default FormRow;
