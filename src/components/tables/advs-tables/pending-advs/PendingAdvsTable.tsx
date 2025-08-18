import PendingAdvsRow from "./PendingAdvsRow";
import ReusableTable from "../../ReusableTable";
import useGetPendingAdvs from "@/hooks/advs/useGetPendingAdvs";

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

  if (error) {
    return <div className="text-center text-red-500">{error.data.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4  ">
      <h2 className="text-xl mb-4 font-semibold text-gray-600 text-right md:text-2xl">
        الإعلانات المقترحة
      </h2>
      {!isPending && pendingAdvs.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
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
