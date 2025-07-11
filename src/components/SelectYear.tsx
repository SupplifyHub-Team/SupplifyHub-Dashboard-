import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";
export default function SelectYear() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - i);
  const [_, setSearchParams] = useSearchParams();
  return (
    <Select
      onValueChange={(value) =>
        setSearchParams({ "orders-per-month-year": value })
      }
      defaultValue={currentYear.toString()}>
      <SelectTrigger>
        <SelectValue placeholder="اختر السنة" />
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
