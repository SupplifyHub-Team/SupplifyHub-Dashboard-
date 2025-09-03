import { TableCell, TableRow } from "@/components/ui/table";
import { formattedData } from "@/lib/utils/formatDate";
import OrderDescDetails from "./OrderDescDetails";
// handle color status in table
type statusColor = "red" | "green" | "yellow" | "blue";

const statusColors: Record<statusColor, { bg: string; accent: string }> = {
  red: { bg: "bg-red-100", accent: "text-red-800" },
  green: { bg: "bg-green-100", accent: "text-green-800" },
  yellow: { bg: "bg-yellow-100", accent: "text-yellow-800" },
  blue: { bg: "bg-blue-100", accent: "text-blue-800" },
};

const stateToColor: Record<string, statusColor> = {
  Active: "blue",
  InProgress: "yellow",
  Completed: "green",
  Canceled: "red",
};

export default function OrderTableRow({ order }: { order: IOrder }) {
  const stateColorKey = stateToColor[order.orderStatus];
  const { bg, accent } = statusColors[stateColorKey];
  return (
    <TableRow>
      <TableCell className="py-5">
        <span>{order.companyName}</span>
      </TableCell>
      <TableCell>
        <span className="block max-w-[200px] truncate text-ellipsis overflow-hidden whitespace-nowrap">
          {order.email}
        </span>
      </TableCell>
      <TableCell>
        <span>{order.category}</span>
      </TableCell>
      <TableCell>
        <OrderDescDetails orderItems={order.orderItems}  />
      </TableCell>
      <TableCell>
        <span>{order.offerNumbers}</span>
      </TableCell>
      <TableCell>
        <span
          className={`text-xs font-medium rounded-3xl px-2.5 py-0.5 ${bg} ${accent}`}
        >
          {order.orderStatus}
        </span>
      </TableCell>
      <TableCell>
        <span>{formattedData(order.createdAt)}</span>
      </TableCell>
      <TableCell>
        <span>{formattedData(order.deadline)}</span>
      </TableCell>
    </TableRow>
  );
}
