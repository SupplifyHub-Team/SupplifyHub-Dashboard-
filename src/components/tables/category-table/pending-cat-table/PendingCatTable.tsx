import ReusableTable from "../../ReusableTable";
import PendingCatTableRow from "./PendingCatTableRow";
const TABLE_HEADERS: string[] = [
  "اسم الفئة",
  "تم الأقتراح بواسطة",
  "تاريخ الأقتراح",
  "الإجراءات",
];

export default function PendingCatTable() {
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl mb-4 font-semibold text-gray-600 text-right md:text-2xl">
        الفئات المقترحة
      </h2>
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
            submittedBy: "محمد علي",
            createdAt: "2023-01-01",
          },
        ]}
        isPending={false}
        renderRow={(pendingCat) => (
          <PendingCatTableRow pendingCat={pendingCat} key={pendingCat.id} />
        )}
      />
    </div>
  );
}
