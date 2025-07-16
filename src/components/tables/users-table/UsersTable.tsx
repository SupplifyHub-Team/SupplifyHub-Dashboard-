import ReusableTable from "../ReusableTable";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";
import useGetAllUsers from "@/hooks/users/useGetAllUsers";

const TABLE_HEADERS: string[] = [
  "الاسم",
  "الدور",
  "الفئة",
  "تاريخ الانضمام",
  "البريد الإلكتروني",
  "الإجراءات",
];

export default function UsersTable() {
  const { data, isPending, error } = useGetAllUsers();

  const users = data?.pages.flatMap((page) => page.data) || [];

  const totalPages = data?.pages[0]?.meta?.totalPages || 0;
  const totalItems = data?.pages[0]?.meta?.totalItems || 0;

  if (error) {
    return (
      <div className="text-center text-red-500">{error.message}</div>
    );
  }

  return (
    <div className="flex flex-col gap-4 ">
      <UsersTableHeader />
      <hr />
      {!isPending && users.length === 0 ? (
        <div className="text-center text-gray-500">لا توجد بيانات لعرضها</div>
      ) : (
        <ReusableTable<IUser>
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems,
            name: "users",
            totalPages,
          }}
          data={users}
          isPending={isPending}
          renderRow={(user) => <UsersTableRow user={user} key={user.userId} />}
        />
      )}
    </div>
  );
}
