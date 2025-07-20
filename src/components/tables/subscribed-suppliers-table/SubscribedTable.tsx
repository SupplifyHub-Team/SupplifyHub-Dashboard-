import useGetAllSubscribers from "@/hooks/subscribers/useGetAllSubscribers";
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
  const { data, isLoading } = useGetAllSubscribers();
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  console.log(data);
  return (
    <div className="flex flex-col gap-4 bg-white ">
      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: data?.meta?.totalItems || 0,
          name: "users",
          totalPages: data?.meta?.totalPages || 0,
        }}
        data={data?.data || []}
        isPending={false}
        renderRow={(subscriber) => (
          <SubscribedTableRow subscriber={subscriber} key={subscriber.userId} />
        )}
        height={37}
      />
    </div>
  );
}
