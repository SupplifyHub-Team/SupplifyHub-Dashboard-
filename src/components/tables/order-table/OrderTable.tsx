import useGetOrders from "@/hooks/orders/useGetOrders";
import ReusableTable from "../ReusableTable";
import OrdersTableHeader from "./OrdersTableHeader";
import OrderTableRow from "./OrderTableRow";
import { AlertCircle } from "lucide-react";
const TABLE_HEADERS: string[] = [
  "اسم المورد",
  "أيميل  المستورد",
  "الفئة",
  "تفاصيل الطلب",
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
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  return (
    <div className="  flex flex-col gap-4 ">
      <OrdersTableHeader />

      {!isPending && orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
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
          renderRow={(order) => (
            <OrderTableRow order={order} key={order.OrderId} />
          )}
        />
      )}
    </div>
  );
};

export default OrderTable;
