import useGetOrders from "@/hooks/orders/useGetOrders";
import ReusableTable from "../ReusableTable";
import OrdersTableHeader from "./OrdersTableHeader";
import OrderTableRow from "./OrderTableRow";
const TABLE_HEADERS: string[] = [
  "اسم المستورد",
  "أيميل  المستورد",
  "الفئة",
  "وصف الطلب",
  "العروض المطلوبة",
  "الحالة",
  "تاريخ الطلب",
  "موعد التسليم",
];

const OrderTable = () => {
  const { data, isPending, error } = useGetOrders();

const orders = data?.data || []; 
const totalPages = data?.meta?.totalPages || 0; 
const totalItems = data?.meta?.totalItems || 0;

  if (error) {
    return (
      <div className="text-center text-red-500">{error.message}</div>
    );
  }

  return (
    <div className="  flex flex-col gap-4 ">
      <OrdersTableHeader />

      <hr />
      {!isPending && orders.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
      ) : (
        <ReusableTable<IOrder>
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems,
            name: "orders",
            totalPages,
          }}
          data={orders}
          isPending={isPending}
          renderRow={(order) => <OrderTableRow order={order} key={order.OrderId} />}
        />
      )}
    </div>
  );
};

export default OrderTable;
