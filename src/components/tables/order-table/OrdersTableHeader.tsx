import OrdersFilters from "./OrdersFilters";

const OrdersTableHeader = () => {
  return (
    <div className="flex items-center gap-3 ">
      <OrdersFilters />
    </div>
  );
};

export default OrdersTableHeader;
