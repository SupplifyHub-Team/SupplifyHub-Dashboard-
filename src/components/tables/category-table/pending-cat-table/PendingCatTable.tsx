import useGetPendingCategory from "@/hooks/categories/useGetPendingCategory";
import ReusableTable from "../../ReusableTable";
import PendingCatTableRow from "./PendingCatTableRow";

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
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl mb-4 font-semibold text-gray-600 text-right md:text-2xl">
        الفئات المقترحة
      </h2>
      {!isPending && pendingCategories.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
      ) : (
        <ReusableTable<IPendingCategory>
          headers={TABLE_HEADERS}
          data={pendingCategories}
          isPending={isPending}
          renderRow={(pendingCat) => (
            <PendingCatTableRow pendingCat={pendingCat} key={pendingCat.id} />
          )}
        />
      )}
    </div>
  );
}
