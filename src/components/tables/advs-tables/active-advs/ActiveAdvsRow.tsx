import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useDeleteActiveAdvs from "@/hooks/advs/useDeleteActiveAdvs";

export default function ActiveAdvsRow({
  activeAdv,
}: {
  activeAdv: IActiveAdv;
}) {
  const { mutate: reject } = useDeleteActiveAdvs();

  const handleDelete = () => reject(activeAdv.id);

  return (
    <TableRow className=" transition-colors duration-200">
      <TableCell className="font-medium text-white">
        {activeAdv.title || "بدون عنوان"}
      </TableCell>

      <TableCell>
        {activeAdv.imagUrl ? (
          <img
            src={activeAdv.imagUrl}
            alt={activeAdv.title + " Logo"}
            className="h-15 w-15 object-cover rounded-full text-white shadow-sm ring-0.5 ring-gray-900/10"
          />
        ) : (
          <span className="text-gray-400 text-sm">لا يوجد صورة</span>
        )}
      </TableCell>

      <TableCell className="text-white">{activeAdv.createdBy}</TableCell>

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
      <TableCell>
        <Button
          variant="destructive"
          className="w-10 h-10 p-0"
          onClick={handleDelete}
        >
          <Trash className="w-4 h-4 font-bold" color="white" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
