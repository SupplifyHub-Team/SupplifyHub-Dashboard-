import ReusableTable from "../../ReusableTable";
import { ADDITIONAL_ORDERS_TABLE } from "@/lib/constants";
import { AlertCircle } from "lucide-react";
import AdditionalOrdersTableRow from "./AdditionalOrdersTableRow";
import useGetAdditionalOrders from "@/hooks/additionals/orders/useGetAdditionalOrders";

const TABLE_HEADERS: string[] = [
  "اسم المورد",
  "البريد الإلكتروني",
  "رقم التلفون ",
  "الكمية المطلوبة",
  "الإجراءات",
];

export default function AdditionalOrdersTable() {
  const { data, isPending } = useGetAdditionalOrders();

  const hasData = (data?.data?.length ?? 0) > 0;

  return (
    <div className="flex flex-col gap-4 bg-bakground  rounded-2xl shadow-md ">
      <div className="flex flex-col gap-2 my-4">
        <h2 className="text-xl  font-bold text-white">
          إدارة طلبات عروض اضافية
        </h2>
        <p className="text-white/85  text-sm">
          يمكنك مراجعة الطلبات الإضافية المقدمة من الموردين والموافقة او الرفض
          عليها
        </p>
      </div>
      {!hasData && !isPending ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          <p className="text-sm">لا توجد طلبات اضافية حالياً</p>
        </div>
      ) : (
        <ReusableTable
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems: data?.meta?.totalItems || 0,
            name: ADDITIONAL_ORDERS_TABLE,
            totalPages: data?.meta?.totalPages || 0,
          }}
          data={data?.data || []}
          isPending={isPending}
          renderRow={(additionalOrders) => (
            <AdditionalOrdersTableRow
              additionalOrders={additionalOrders}
              key={additionalOrders.requestId}
            />
          )}
          height={37}
        />
      )}
    </div>
  );
}
