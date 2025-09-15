import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";
import { formattedData } from "@/lib/utils/formatDate";
import useAcceptPendingUsers from "@/hooks/users/useAcceptPendingUsers";
import useRejectPendingUsers from "@/hooks/users/useRejectPendingUsers";
import { handleDownload } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AreYouSure } from "@/components/AreYouSure";
import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";

export default function PendingUserTableRow({
  pendingUser,
}: {
  pendingUser: IPendingUser;
}) {
  const { mutate: accept } = useAcceptPendingUsers();
  const { mutate: reject } = useRejectPendingUsers();

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
        <div className="flex flex-wrap gap-2">
          {pendingUser.categories.map((category) => (
            <Badge
              key={category}
              variant="default"
              className="rounded-full px-2 font-meduim! text-nowrap py-1 text-sm bg-primary/40 shadow-2xl text-white dark:bg-card-700">
              {category}
            </Badge>
          ))}
        </div>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => handleDownload(pendingUser.name)}
          rel="noopener noreferrer"
          variant="link"
          className="text-blue-600 hover:underline">
          عرض التوثيق
        </Button>
      </TableCell>
      <TableCell>
        <span> {formattedData(pendingUser.createdAt)}</span>
      </TableCell>
      <TableCell>
        <span>
          <div className="flex items-center">
            <AreYouSure
              onAccept={() => accept(pendingUser.id)}
              TriggerButton={
                <Button size="icon" variant="link" className="hover:scale-105">
                  <CircleCheck
                    color="#02f71f"
                    className="w-6 h-6 cursor-pointer"
                  />
                </Button>
              }
            />
            <AreYouSureDeleteing
              onAccept={() => reject(pendingUser.id)}
              TriggerButton={
                <Button size="icon" variant="link" className="hover:scale-105">
                  <CircleX color="#f7021b" className="w-6 h-6 cursor-pointer" />
                </Button>
              }
            />
          </div>
        </span>
      </TableCell>
    </TableRow>
  );
}
