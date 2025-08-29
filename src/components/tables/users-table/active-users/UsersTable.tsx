import ReusableTable from "../../ReusableTable";
import UsersTableHeader from "../active-users/UsersTableHeader";
import UsersTableRow from "../active-users/UsersTableRow";
import useGetAllUsers from "@/hooks/users/useGetAllUsers";

const TABLE_HEADERS: string[] = [
  "الاسم",
  "البريد الإلكتروني",
  "الدور",
  "الفئة",
  "تاريخ الانضمام",
  "الحالة",
  "الإجراءات",
];

export default function UsersTable() {
  const { data, isPending, error } = useGetAllUsers();

  const users = data?.data || [];
  const totalPages = data?.meta?.totalPages || 0;
  const totalItems = data?.meta?.totalItems || 0;

  if (error) {
    return <div className="text-center text-red-500">{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 ">
      <UsersTableHeader />

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
    </div>
  );
}
