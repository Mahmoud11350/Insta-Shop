import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectRow = ({
  name,
  placeholder,
  data,
}: {
  name: string;
  placeholder: string;
  data?: string[];
}) => {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data?.map((item) => {
          return <SelectItem value={item}>{item}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
export default SelectRow;
