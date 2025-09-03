import ReusableTable from "../../ReusableTable";

import useGetPendingSubscriptions from "@/hooks/subscribers/useGetPendingSubscriptions";
import PendingSubscribersTableRow from "./PendingSubscriptionsTableRow";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "اسم المورد",
  "البريد الإلكتروني",
  "نوع الاشتراك",
  "مدة الاشتراك",
  "تاريخ الانشاء",
  "تاريخ الانضمام",
  " الإجراءات ",
];

export default function PendingSubscriptionsTable() {
  const { data, isPending } = useGetPendingSubscriptions();
  const subscriptions = data?.data || [];



  return (
    <div className="flex flex-col gap-4  ">
      <h2 className="text-xl my-4! font-semibold text-white text-right md:text-2xl">
        الاشتراكات المقترحة
      </h2>
      {!isPending && subscriptions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IPendingSubscriptions>
          headers={TABLE_HEADERS}
          data={subscriptions}
          isPending={isPending}
          renderRow={(subscriptions) => (
            <PendingSubscribersTableRow
              subscriptions={subscriptions}
              key={subscriptions.supplierId}
            />
          )}
          height={37}
        />
      )}
    </div>
  );
}
