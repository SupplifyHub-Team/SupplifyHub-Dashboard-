import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableSkeleton from "@/components/tables/table-skeleton";
import AppPagination from "@/components/tables/AppPagination";
// import { TABLE_ROWS } from "@/lib/constants";

type PaginationProps = {
  totalItems: number;
  name: string;
  totalPages: number;
};

interface ReusableTableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  isPending: boolean;
  caption?: string;
  paginationProps?: PaginationProps;
  height?: number;
}

export default function ReusableTable<T>({
  headers,
  data,
  renderRow,
  isPending,
  caption,
  paginationProps,
  height = 60.89,
}: ReusableTableProps<T>) {
  // const emptyRows = Math.max(0, TABLE_ROWS - data?.length);
  return (
    <Table>
      {caption && <TableCaption className="sr-only">{caption}</TableCaption>}
      <TableHeader>
        <TableRow dir="rtl" className="bg-gray-100">
          {headers.map((header) => (
            <TableHead
              key={header}
              className="text-right text-sm font-semibold text-gray-700 px-4 py-3"
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isPending ? (
          <TableSkeleton
            style={{
              height,
            }}
            rows={10}
            cells={headers.length}
          />
        ) : (
          <>
            {data?.map(renderRow)}
            {/* {Array.from({ length: emptyRows }).map((_, index) => (
              <TableRow key={`empty-${index}`}>
                {headers.map((_, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    style={{
                      height,
                    }}
                  />
                ))}
              </TableRow>
            ))} */}
          </>
        )}
      </TableBody>
      {paginationProps && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={headers.length}>
              <AppPagination {...paginationProps} />
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
