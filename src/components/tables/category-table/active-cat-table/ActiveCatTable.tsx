import SearchInput from "@/components/SearchInput";
import ReusableTable from "../../ReusableTable";
import ActiveCatTableRow from "./ActiveCatTableRow";
import useGetActiveCategory from "@/hooks/categories/useGetActiveCategory";
import AddCategories from "@/components/categories/AddCategories";

const TABLE_HEADERS: string[] = [
  "اسم الفئة",
  "الموردين المرتبطين",
  "المستوردين المرتبطين",
  "الإجراءات",
];

const ActiveCatTable = () => {
  const { data, isPending, error } = useGetActiveCategory();

  if (error) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  const categories = data?.data || [];
  const totalPages = data?.meta?.totalPages || 0;
  const totalItems = data?.meta?.totalItems || 0;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-600 text-right md:text-2xl ">
        الفئات النشطة
      </h2>
      <div className="md:flex  items-center justify-between my-2 ">
        <SearchInput
          className="w-full  "
          searchKey="activeCategories-search"
          placeholder="ابحث عن فئة..."
        />

        {/* button to add new category */}
        <AddCategories />
      </div>

      {!isPending && categories.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
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
            />
          )}
        />
      )}
    </div>
  );
};

export default ActiveCatTable;
