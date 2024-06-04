import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const AmountSelect = ({ defaultValue }: { defaultValue: string }) => {
  return (
    <Select defaultValue={defaultValue} name="amount">
      <SelectTrigger className="w-[180px] ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 10 }).map((_, index) => {
          const selectedValue = (index += 1).toString();
          return (
            <SelectItem value={selectedValue} key={selectedValue}>
              {index}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
export default AmountSelect;
