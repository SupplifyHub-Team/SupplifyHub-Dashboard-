import { TableCell, TableRow } from "@/components/ui/table";
import {UserRoundX } from "lucide-react";

export default function UsersTableRow({ user }: { user: IUser }) {
  return (
    <TableRow>
      <TableCell className="py-5">
        <span> {user.name}</span>
      </TableCell>
      <TableCell>
        <span> {user.role}</span>
      </TableCell>
      <TableCell>{user.category}</TableCell>
      <TableCell>
        <span>{user.createdAt}</span>
      </TableCell>
      <TableCell>
        <span>{user.email}</span>
      </TableCell>
      <TableCell>
       <UserRoundX color="#f20707" className="w-6 h-6"/>
      </TableCell>
    </TableRow>
  );
}
