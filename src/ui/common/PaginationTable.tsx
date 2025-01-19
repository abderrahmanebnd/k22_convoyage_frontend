import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import usePagination from "@/hooks/usePagination";
import { Pagination } from "@/lib/types";

interface DataTablePaginationProps {
  pagination: Pagination;
}

export function DataTablePagination({ pagination }: DataTablePaginationProps) {
  const { noPagination, prevPage, nextPage } = usePagination({ pagination });

  const { currentPage, totalPages, prev, next } = pagination;

  if (noPagination) return null;
  return (
    <div className="flex items-center justify-between overflow-auto px-2">
      <div className="flex items-center sm:space-x-6 lg:space-x-8">
        {/* Rows per page */}
        <div className="flex items-center space-x-2"></div>

        {/* Page info */}
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {currentPage} sur {totalPages}
        </div>

        {/* Pagination controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 md:h-fit md:w-fit md:p-2"
            onClick={prevPage}
            disabled={!prev}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="hidden md:block">Aller à la page précédente</span>
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 md:h-fit md:w-fit md:p-2"
            onClick={nextPage}
            disabled={!next}
          >
            <span className="hidden md:block">Aller à la page suivante</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
