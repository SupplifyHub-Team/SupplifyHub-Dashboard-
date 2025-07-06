import SearchInput from "@/components/SearchInput";
import UsersFilters from "./UsersFilters";

export default function UsersTableHeader() {
  return (
    <div className="flex items-center gap-3  ">
      <SearchInput searchKey="users" placeholder="ابحث عن مستخدمين..." />
      <div className="mx-2 h-8 w-0.5 bg-black/30 " />
      <UsersFilters />
    </div>
  );
}
