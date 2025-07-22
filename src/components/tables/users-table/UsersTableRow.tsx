import { TableCell, TableRow } from "@/components/ui/table";
import { formattedData } from "@/lib/utils/formatDate";
import { UserRoundX } from "lucide-react";
export default function UsersTableRow({ user }: { user: IUser }) {
  return (
    <TableRow>
      <TableCell className="py-5">
        <span> {user.companyName}</span>
      </TableCell>
      <TableCell>
        <span> {user.role}</span>
      </TableCell>
      <TableCell>{user.categoryNames.join(", ")}</TableCell>
      <TableCell>
        <span>{formattedData(user.joinDate)}</span>
      </TableCell>
      <TableCell>
        <span>{user.email}</span>
      </TableCell>
    </TableRow>
  );
}
