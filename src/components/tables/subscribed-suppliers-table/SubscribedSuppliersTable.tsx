import useGetAllSubscribers from "@/hooks/subscribers/useGetAllSubscribers";
import ReusableTable from "../ReusableTable";
import SubscribedTableRow from "./SubscribedSuppliersTableRow";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import SubscribedSuppliersTableHeader from "./SubscribedSuppliersTableHeader";

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

export default function SubscribedSuppliersTable() {
  const { data, isPending } = useGetAllSubscribers();

  console.log(data);
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg ">
      <SubscribedSuppliersTableHeader />
      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: data?.meta?.totalItems || 0,
          name: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
          totalPages: data?.meta?.totalPages || 0,
        }}
        data={data?.data || []}
        isPending={isPending}
        renderRow={(subscriber) => (
          <SubscribedTableRow subscriber={subscriber} key={subscriber.userId} />
        )}
        height={37}
      />
    </div>
  );
}
