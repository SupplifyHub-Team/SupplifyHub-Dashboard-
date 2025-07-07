import { TableCell, TableRow } from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";

const PendingCatTableRow = ({ pendingCat }: { pendingCat: PendingCatType }) => {
  return (
    <TableRow>
      <TableCell>
        <span> {pendingCat.name}</span>
      </TableCell>
      <TableCell>
        <span> {pendingCat.submittedBy}</span>
      </TableCell>
      <TableCell>
        <span> {pendingCat.createdAt}</span>
      </TableCell>
      <TableCell>
        <span>
          <div className="flex items-center gap-2">
            <CircleCheck color="#02f71f" className="w-6 h-6 cursor-pointer" />
            <CircleX color="#f7021b" className="w-6 h-6 cursor-pointer" />
          </div>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default PendingCatTableRow;
