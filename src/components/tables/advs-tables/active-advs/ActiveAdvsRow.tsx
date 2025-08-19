import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function ActiveAdvsRow({
  activeAdv,
}: {
  activeAdv: IActiveAdv;
}) {
  return (
    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
      <TableCell className="font-medium text-gray-700">
        {activeAdv.title || "بدون عنوان"}
      </TableCell>

      <TableCell>
        {activeAdv.imagUrl ? (
          <img
            src={activeAdv.imagUrl}
            alt={activeAdv.title + " Logo"}
            className="h-14 w-20 object-cover rounded-lg shadow-sm border"
          />
        ) : (
          <span className="text-gray-400 text-sm">لا يوجد صورة</span>
        )}
      </TableCell>

      <TableCell className="text-gray-600">{activeAdv.createdBy}</TableCell>

      <TableCell>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
          {format(new Date(activeAdv.startDate), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-red-100 animate-pulse transition-all text-red-700 hover:bg-red-200">
          {format(new Date(activeAdv.endDate), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
          {format(new Date(activeAdv.createdAt), "yyyy-MM-dd")}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className="bg-orange-200 text-orange-700 hover:bg-orange-300">
          {format(new Date(activeAdv.updatedAt), "yyyy-MM-dd")}
        </Badge>
      </TableCell>
    </TableRow>
  );
}
