import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import { formattedData } from "@/lib/utils/formatDate";
import useAcceptPendingUsers from "@/hooks/users/useAcceptPendingUsers";
import useRejectPendingUsers from "@/hooks/users/useRejectPendingUsers";

export default function PendingUserTableRow({
  pendingUser,
}: {
  pendingUser: IPendingUser;
}) {
  const { mutate } = useAcceptPendingUsers();
  const { mutate: reject } = useRejectPendingUsers();

  const handleAccept = () => {
    mutate(pendingUser.id);
  };

  const handleReject = () => {
    reject(pendingUser.id);
  };
  return (
    <TableRow>
      <TableCell>
        <span className="flex items-center">
          {pendingUser.logoURL ? (
            <img
              src={pendingUser.logoURL}
              alt={pendingUser.name + " Logo"}
              className="h-15 w-15 object-cover rounded-full text-white shadow-sm ring-0.5 ring-gray-900/10"
            />
          ) : (
            <span>لا يوجد لوجو</span>
          )}
        </span>
      </TableCell>
      <TableCell>
        <span> {pendingUser.name}</span>
      </TableCell>
      <TableCell>
        <span> {pendingUser.email} </span>
      </TableCell>
      <TableCell>
        <span> {pendingUser.categories} </span>
      </TableCell>
      <TableCell>
        <span className="flex items-center">
          {pendingUser.pdfURL ? (
            <a
              href={pendingUser.pdfURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              عرض التوثيق
            </a>
          ) : (
            <span>لا يوجد توثيق</span>
          )}
        </span>
      </TableCell>
      <TableCell>
        <span> {formattedData(pendingUser.createdAt)}</span>
      </TableCell>
      <TableCell>
        <span>
          <div className="flex items-center gap-2">
            <CircleCheck
              onClick={handleAccept}
              color="#02f71f"
              className="w-6 h-6 cursor-pointer"
            />
            <CircleX
              onClick={handleReject}
              color="#f7021b"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </span>
      </TableCell>
    </TableRow>
  );
}
