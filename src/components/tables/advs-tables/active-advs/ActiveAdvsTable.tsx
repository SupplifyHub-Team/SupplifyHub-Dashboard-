import useGetActiveAdvs from "@/hooks/advs/useGetActiveAdvs";
import ReusableTable from "../../ReusableTable";
import ActiveAdvsRow from "./ActiveAdvsRow";
import ActiveAdvsTableHeader from "./ActiveAdvsTableHeader";
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

export default function ActiveAdvsTable() {
  const { data, isPending, error } = useGetActiveAdvs();

  const activeAdvs = data?.data || [];
  const totalPages = data?.meta?.totalPages || 0;
  const totalItems = data?.meta?.totalItems || 0;

  if (error) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4  ">
      <ActiveAdvsTableHeader />
      {!isPending && activeAdvs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IActiveAdv>
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems,
            name: "activeAdvs",
            totalPages,
          }}
          height={37}
          data={activeAdvs}
          isPending={isPending}
          renderRow={(activeAdv) => (
            <ActiveAdvsRow activeAdv={activeAdv} key={activeAdv.id} />
          )}
        />
      )}
    </div>
  );
}
