import { TableCell, TableRow } from "@/components/ui/table";
import useActivationUser from "@/hooks/users/useActivationUser";
import useBanUser from "@/hooks/users/useBanUser";
import { cn } from "@/lib/utils";
import { formattedData } from "@/lib/utils/formatDate";
import { ShieldBan, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function UsersTableRow({ user }: { user: IUser }) {
  const { mutate: banUser } = useBanUser();
  const { mutate: activateUser } = useActivationUser();

  const handleBanUser = () => {
    banUser(user.userId);
  };

  const handleActivateUser = () => {
    activateUser(user.userId);
  };

  return (
    <TableRow className={cn(!user.isActive && "opacity-60")}>
      {/* Company Name */}
      <TableCell className="py-5">
        <span>{user.companyName}</span>
      </TableCell>

      {/* Email */}
      <TableCell>
        <span>{user.email}</span>
      </TableCell>

      {/* Role */}
      <TableCell>
        <span>{user.role}</span>
      </TableCell>

      {/* Categories */}
      <TableCell>
        <div className="flex flex-wrap gap-2">
          {user.categoryNames.map((category) => (
            <Badge
              key={category}
              variant="default"
              className="rounded-full px-2 font-meduim! text-nowrap py-1 text-sm bg-primary/40 shadow-2xl text-white dark:bg-card-700"
            >
              {category}
            </Badge>
          ))}
        </div>
      </TableCell>

      {/* Join Date */}
      <TableCell>
        <span>{formattedData(user.joinDate)}</span>
      </TableCell>

      {/* User State Badge */}
      <TableCell>
        {user.isActive ? (
          <Badge variant="success" className="bg-green-100 text-green-700">
            Active
          </Badge>
        ) : (
          <Badge variant="destructive" className="bg-red-100 text-red-700">
            Inactive
          </Badge>
        )}
      </TableCell>

      {/* Action Icon with Tooltip */}
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {user.isActive ? (
                <ShieldBan
                  onClick={handleBanUser}
                  className="text-red-500 cursor-pointer"
                />
              ) : (
                <UserCheck
                  onClick={handleActivateUser}
                  className="text-green-500 cursor-pointer"
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {user.isActive ? "إيقاف هذا المستخدم" : "تفعيل هذا المستخدم"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
    </TableRow>
  );
}
