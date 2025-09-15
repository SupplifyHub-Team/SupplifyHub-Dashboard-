import { Input } from "@/components/ui/input";
import { useSyncedSearchInput } from "@/hooks/useSyncedSearchInput";
import { Label } from "./ui/label";
import { Search } from "lucide-react";

interface SearchInputProps {
  searchKey: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  searchKey,
  placeholder,
  className,
  onChange,
}: SearchInputProps) {
  const { inputValue, setInputValue } = useSyncedSearchInput(searchKey);

  return (
    <>
      <Label htmlFor={`search-input-${searchKey}`} className="sr-only">
        ابحث في {searchKey} 
      </Label>
      <div className="relative">
        <Input
          type="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange?.(e.target.value);
          }}
          className={`w-full text-white ps-9! max-w-sm bg-background border-none placeholder:text-xs ${
            className || ""
          }`}
          id={`search-input-${searchKey}`}
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="w-4 h-4 " color="#ffff" />
        </div>
      </div>
    </>
  );
}
