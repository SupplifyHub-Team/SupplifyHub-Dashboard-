import SearchInput from "@/components/SearchInput";
import OrdersFilters from "./OrdersFilters";

const OrdersTableHeader = () => {
  return (
    <div className="flex items-center gap-3 ">
      <SearchInput
        searchKey="orders-search" // This key should match the one used in the search logic
        placeholder="ابحث عن مستخدمين..."
      />

      <div className="mx-2 h-8 w-0.5 bg-black/30 " />
      <OrdersFilters />
    </div>
  );
};

export default OrdersTableHeader;
