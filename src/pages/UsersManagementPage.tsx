import UsersTable from "@/components/tables/users-table/UsersTable";
import Box from "@/components/ui/box";

export default function UsersManagementPage() {
  return (
    <Box className="w-full">
      <UsersTable />
    </Box>
  );
}
