import { TableCell, TableRow } from "@/components/ui/table";

// handle color status in table
type statusColor = "red" | "green" | "yellow" | "blue";

const statusColors: Record<statusColor, { bg: string; accent: string }> = {
  red: { bg: "bg-red-100", accent: "text-red-800" },
  green: { bg: "bg-green-100", accent: "text-green-800" },
  yellow: { bg: "bg-yellow-100", accent: "text-yellow-800" },
  blue: { bg: "bg-blue-100", accent: "text-blue-800" },
};

const stateToColor: Record<string, statusColor> = {
  active: "blue",
  inProgress: "yellow",
  completed: "green",
  failed: "red",
};

export default function OrderTableRow({ order }: { order: IOrder }) {
  const stateColorKey = stateToColor[order.state];
  const { bg, accent } = statusColors[stateColorKey];
  return (
    <TableRow>
      <TableCell className="py-5">
        <span>{order.name}</span>
      </TableCell>
      <TableCell>
        <span className="block max-w-[200px] truncate text-ellipsis overflow-hidden whitespace-nowrap">{order.email}</span>
      </TableCell>
      <TableCell>
        <span>{order.category}</span>
      </TableCell>
      <TableCell>
        <span className="block max-w-[200px] truncate text-ellipsis overflow-hidden whitespace-nowrap">{order.desciption}</span>
      </TableCell>
      <TableCell>
        <span>{order.offersNumber}</span>
      </TableCell>
      <TableCell>
        <span
          className={`text-xs font-medium rounded-3xl px-2.5 py-0.5 ${bg} ${accent}`}
        >
          {order.state}
        </span>
      </TableCell>
      <TableCell>
        <span>{order.createdAt}</span>
      </TableCell>
      <TableCell>
        <span>{order.deadline}</span>
      </TableCell>
    </TableRow>
  );
}
