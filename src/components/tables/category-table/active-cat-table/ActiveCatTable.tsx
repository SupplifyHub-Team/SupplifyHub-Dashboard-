import SearchInput from "@/components/SearchInput";
import ReusableTable from "../../ReusableTable";
import ActiveCatTableRow from "./ActiveCatTableRow";
import { Plus } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "اسم الفئة",
  "الموردين المرتبطين",
  "المستوردين المرتبطين",
  "الإجراءات",
];

const ActiveCatTable = () => {
  return (
    <div className="flex flex-col gap-4">
  
        <h2 className="text-xl font-semibold text-gray-600 text-right md:text-2xl ">
          الفئات النشطة
        </h2>
        <div className="md:flex  items-center justify-between my-2 ">
          <SearchInput
            className="w-full  "
            searchKey="users"
            placeholder="ابحث عن فئة..."
          />

          {/* button to add new category */}
          <button className="flex items-center  justify-between w-full mt-2.5  md:gap-1.5 cursor-pointer  px-4 py-2 text-sm md:text-md md:w-auto rounded-full  bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
            اضافة فئة جديدة
            <Plus color="#ffffff" className="md:w-6 md:h-6 w-4 h-4 " />
          </button>
        </div>
      

      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: 100,
          name: "categories",
          totalPages: 10,
        }}
        data={[
          {
            id: "1",
            name: " التجارة",
            supplierNumber: 5,
            clientNumber: 12,
          },
        ]}
        isPending={false}
        renderRow={(activeCat) => (
          <ActiveCatTableRow activeCat={activeCat} key={activeCat.id} />
        )}
      />
    </div>
  );
};

export default ActiveCatTable;
