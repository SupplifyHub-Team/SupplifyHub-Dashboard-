import useGetPendingUsers from "@/hooks/users/useGetPendingUsers";
import PendingUserTableRow from "./PendingUserTableRow";
import ReusableTable from "../../ReusableTable";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "لوجو الشركة",
  "اسم الشركه",
  "الأيميل",
  "الفئات",
  " توثيق الشركة",
  " تاريخ التسجيل",
  "الإجراءات",
];

export default function PendingUserTable() {
  const { data, isPending, error } = useGetPendingUsers();

  const pendingUsers = data?.data || [];

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl mb-4 font-semibold text-white text-right md:text-2xl">
        الشركات المقترحه
      </h2>
      {!isPending && pendingUsers.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable<IPendingUser>
          headers={TABLE_HEADERS}
          data={pendingUsers}
          isPending={isPending}
          renderRow={(pendingUser) => (
            <PendingUserTableRow
              pendingUser={pendingUser}
              key={pendingUser.id}
            />
          )}
        />
      )}
    </div>
  );
}
