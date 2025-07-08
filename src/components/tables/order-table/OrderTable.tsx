import ReusableTable from "../ReusableTable";
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
  return (
    <div className="  flex flex-col gap-4 ">
      <hr />
      <ReusableTable<IOrder>
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: 100,
          name: "orders",
          totalPages: 10,
        }}
        data={[
          {
            id: "1",
            name: "محمد علي",
            email: "mohamed@example.com",
            category: "التجارة",
            desciption: "تفاصيل الطلب للمستورد محمد علي ",
            offersNumber: 5,
            createdAt: "2023-01-01",
            deadline: "2023-01-01",
            state: "active",
          },
        ]}
        isPending={false}
        renderRow={(order) => <OrderTableRow order={order} key={order.id} />}
      />
    </div>
  );
};

export default OrderTable;
