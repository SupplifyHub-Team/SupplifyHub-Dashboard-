import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";
export default function SelectYear() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedYear =
    Number(searchParams.get("orders-per-month-year")) || 2025;
  const years = Array.from(
    { length: 6 },
    (_, i) => new Date().getFullYear() - i
  );
  return (
    <Select
      onValueChange={(value) =>
        setSearchParams({ "orders-per-month-year": value })
      }
      defaultValue={selectedYear.toString()}>
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
