import useGetAllSubscribers from "@/hooks/subscribers/useGetAllSubscribers";
import ReusableTable from "../../ReusableTable";
import SubscribedTableRow from "./SubscribedSuppliersTableRow";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import SubscribedSuppliersTableHeader from "./SubscribedSuppliersTableHeader";

const TABLE_HEADERS: string[] = [
  "اسم المورد",
  "البريد الإلكتروني",
  "نوع الاشتراك",
  "تاريخ بدء الاشتراك",
  "تاريخ نهاية الاشتراك",
  "تاريخ الانضمام",
  "الطلبات المكتملة",
];

export default function SubscribedSuppliersTable() {
  const { data, isPending } = useGetAllSubscribers();

  return (
    <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-lg ">
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
