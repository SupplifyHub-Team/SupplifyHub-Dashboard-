import ReusableTable from "../ReusableTable";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";

const TABLE_HEADERS: string[] = [
  "الاسم",
  "الدور",
  "الفئة",
  "تاريخ الانضمام",
  "البريد الإلكتروني",
  "الإجراءات",
];

export default function UsersTable() {
  return (
    <div className="flex flex-col gap-4">
      <UsersTableHeader />
      <hr />
      <ReusableTable<IUser>
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: 100,
          name: "users",
          totalPages: 10,
        }}
        data={[
          {
            id: "1",
            name: "محمد علي",
            email: "mohamed@example.com",
            role: "client",
            createdAt: "2023-01-01",
            category: "التجارة",
          },
        ]}
        isPending={false}
        renderRow={(user) => <UsersTableRow user={user} key={user.id} />}
      />
    </div>
  );
}
