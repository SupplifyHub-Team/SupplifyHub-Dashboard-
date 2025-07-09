import ReusableTable from "../ReusableTable";
import SubscribedTableRow from "./SubscribedTableRow";

const TABLE_HEADERS: string[] = [
  "اسم المستورد",
  "البريد الإلكتروني",
  "نوع الاشتراك",
  "تاريخ بدء الاشتراك",
  "تاريخ نهاية الاشتراك",
  "تاريخ الانضمام",
  "عدد الطلبات المكتملة",
  "حالة الاشتراك",
];

export default function SubscribedTable() {
  return (
    <div className="flex flex-col gap-4 bg-white ">
      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: 100,
          name: "users",
          totalPages: 10,
        }}
        data={[
          {
            id: 1,
            name: "محمد علي",
            email: "mohamed@example.com",
            subscribePlan: "مجانية",
            subscriptionStart: "2023-01-01",
            subscriptionEnd: "2023-01-01",
            joinDate: "2023-01-01",
            ordersCompleted: 5,
            planStatus: "active",
          },
        ]}
        isPending={false}
        renderRow={(subscriber) => (
          <SubscribedTableRow subscriber={subscriber} key={subscriber.id} />
        )}
      />
    </div>
  );
}
