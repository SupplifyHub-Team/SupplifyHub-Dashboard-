import PendingAdvsRow from "./PendingAdvsRow";
import ReusableTable from "../../ReusableTable";
import useGetPendingAdvs from "@/hooks/advs/useGetPendingAdvs";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS = [
  "اسم الإعلان",
  "الصورة",
  "تم الإنشاء بواسطة",
  "تاريخ بداية الإعلان",
  "تاريخ انتهاء الإعلان",
  "تاريخ الإنشاء",
  "تاريخ التحديث",
  "الإجراءات",
];

export default function PendingAdvsTable() {
  const { data, isPending, error } = useGetPendingAdvs();

  const pendingAdvs = data?.data || [];


  return (
    <div className="flex flex-col   ">
      <h2 className="text-xl mt-4 font-semibold text-white text-right md:text-2xl">
        الإعلانات المقترحة
      </h2>
      {!isPending && pendingAdvs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IPendingAdv>
          headers={TABLE_HEADERS}
          data={pendingAdvs}
          isPending={isPending}
          renderRow={(pendingAdv) => (
            <PendingAdvsRow pendingAdv={pendingAdv} key={pendingAdv.id} />
          )}
          height={37}
        />
      )}
    </div>
  );
}
