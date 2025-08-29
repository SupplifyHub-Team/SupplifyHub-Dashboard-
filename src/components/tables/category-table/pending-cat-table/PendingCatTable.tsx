import useGetPendingCategory from "@/hooks/categories/useGetPendingCategory";
import ReusableTable from "../../ReusableTable";
import PendingCatTableRow from "./PendingCatTableRow";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "اسم الفئة",
  "تم الأقتراح بواسطة",
  "تاريخ الأقتراح",
  "الإجراءات",
];

export default function PendingCatTable() {
  const { data, isPending, error } = useGetPendingCategory();

  const pendingCategories = data?.data || [];

  if (error) {
    return <div className="text-center text-red-500">{error.data.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl mb-4 font-semibold text-white text-right md:text-2xl">
        الفئات المقترحة
      </h2>
      {!isPending && pendingCategories.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IPendingCategory>
          headers={TABLE_HEADERS}
          data={pendingCategories}
          isPending={isPending}
          renderRow={(pendingCat) => (
            <PendingCatTableRow pendingCat={pendingCat} key={pendingCat.categoryId} />
          )}
        />
      )}
    </div>
  );
}
