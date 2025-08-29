import SearchInput from "@/components/SearchInput";
import ReusableTable from "../../ReusableTable";
import ActiveCatTableRow from "./ActiveCatTableRow";
import useGetActiveCategory from "@/hooks/categories/useGetActiveCategory";
import AddCategories from "@/components/categories/AddCategories";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "صوره الفئة",
  "اسم الفئة",
  "الموردين المرتبطين",
  "المستوردين المرتبطين",
  "الإجراءات",
];

const ActiveCatTable = () => {
  const { data, isPending, error } = useGetActiveCategory();
  const [editingCategory, setEditingCategory] =
    useState<IActiveCategory | null>(null);

  if (error) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  const categories = data?.data || [];
  const totalPages = data?.meta?.totalPages || 0;
  const totalItems = data?.meta?.totalItems || 0;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-white text-right md:text-2xl ">
        الفئات النشطة
      </h2>
      <div className="flex gap-2  items-center justify-between my-2 ">
        <SearchInput
          className="w-full text-white "
          searchKey="activeCategories-search"
          placeholder="ابحث عن فئة..."
        />

        <AddCategories
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
        />
      </div>

      {!isPending && categories.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IActiveCategory>
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems,
            name: "activeCategories",
            totalPages,
          }}
          data={categories}
          isPending={isPending}
          renderRow={(activeCat) => (
            <ActiveCatTableRow
              activeCat={activeCat}
              key={activeCat.categoryId}
              setEditingCategory={setEditingCategory}
            />
          )}
        />
      )}
    </div>
  );
};

export default ActiveCatTable;
