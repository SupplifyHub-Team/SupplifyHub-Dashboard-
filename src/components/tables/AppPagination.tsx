import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TABLE_ROWS } from "@/lib/constants";

interface AppPaginationProps {
  name: string;
  totalPages: number;
  totalItems: number;
}

export default function AppPagination({
  name,
  totalPages,
  totalItems,
}: AppPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(`Page-${name}`)) || 1;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    if (page === 1) {
      searchParams.delete(`Page-${name}`);
    } else {
      searchParams.set(`Page-${name}`, page.toString());
    }
    setSearchParams(searchParams);
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const page = parseInt(value);

    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  const startItem = (currentPage - 1) * TABLE_ROWS + 1;
  const endItem = Math.min(currentPage * TABLE_ROWS, totalItems);

  return (
    <div className="flex  px-2 gap-3 items-center justify-between">
      <div className="flex  gap-2 items-center">
        <Pagination>
          <PaginationContent className="gap-2">
            <PaginationItem>
              <Button
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="h-8 w-8 bg-primary">
                <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </PaginationItem>

            <PaginationItem>
              <label htmlFor={`page-input-${name}`} className="sr-only">
                Page {name}
              </label>
              <Input
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={handlePageInput}
                className="w-[4ch] h-8 px-1 text-center"
                id={`page-input-${name}`}
              />
            </PaginationItem>

            <PaginationItem>
              <Button
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="h-8 w-8 ">
                <ChevronLeft className="h-4 w-4 text-white" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <p className="text-xs text-nowrap">اقصى عدد : {totalPages}</p>
      </div>
      <div className="text-xs     text-muted-foreground">
        عرض {startItem} الى {endItem}
      </div>
    </div>
  );
}
