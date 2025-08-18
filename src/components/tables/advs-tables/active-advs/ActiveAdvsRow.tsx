import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

export default function ActiveAdvsRow({
  activeAdv,
}: {
  activeAdv: IActiveAdv;
}) {

  return (
    <TableRow>
      <TableCell>
        <span>{activeAdv.title}</span>
      </TableCell>
      <TableCell>
        <span className="flex items-center">
          {activeAdv.imagUrl ? (
            <img
              src={activeAdv.imagUrl}
              alt={activeAdv.imagUrl + " Logo"}
              className=" h-16 object-cover "
            />
          ) : (
            <span>لا يوجد لوجو</span>
          )}
        </span>
      </TableCell>
      <TableCell>
        <span>{activeAdv.createdBy}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(activeAdv.startDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(activeAdv.endDate), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(activeAdv.createdAt), "yyyy-MM-dd")}</span>
      </TableCell>
      <TableCell>
        <span>{format(new Date(activeAdv.updatedAt), "yyyy-MM-dd")}</span>
      </TableCell>
    </TableRow>
  );
}
