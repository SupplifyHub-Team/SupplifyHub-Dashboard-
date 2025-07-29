import useGetPendingUsers from "@/hooks/users/useGetPendingUsers";
import PendingUserTableRow from "./PendingUserTableRow";
import ReusableTable from "../../ReusableTable";

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

  if (error) {
    return <div className="text-center text-red-500">{error.data.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl mb-4 font-semibold text-gray-600 text-right md:text-2xl">
        الشركات المقترحه
      </h2>
      {!isPending && pendingUsers.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
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
