import useGetActiveAdvs from "@/hooks/advs/useGetActiveAdvs";
import ReusableTable from "../../ReusableTable";
import ActiveAdvsRow from "./ActiveAdvsRow";

const TABLE_HEADERS = [
  "اسم الإعلان",
  "الصورة",
  "تم الإنشاء بواسطة",
  "تاريخ بداية الإعلان",
  "تاريخ انتهاء الإعلان",
  "تاريخ الإنشاء",
  "تاريخ التحديث",
];

export default function ActiveAdvsTable() {
  const { data, isPending, error } = useGetActiveAdvs();

  const activeAdvs = data?.data || [];

  if (error) {
    return <div className="text-center text-red-500">{error.data.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4  ">
      <h2 className="text-xl mb-4 font-semibold text-gray-600 text-right md:text-2xl">
        الإعلانات النشطة
      </h2>
      {!isPending && activeAdvs.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
      ) : (
        <ReusableTable<IActiveAdv>
          headers={TABLE_HEADERS}
          data={activeAdvs}
          isPending={isPending}
          renderRow={(activeAdv) => (
            <ActiveAdvsRow activeAdv={activeAdv} key={activeAdv.id} />
          )}
          height={37}
        />
      )}
    </div>
  );
}
