import { Pagination } from "@/lib/types";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  pagination: Pagination;
};
export default function usePagination({ pagination }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function nextPage() {
    const next = pagination?.next ? pagination.currentPage + 1 : currentPage;

    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = pagination?.prev ? pagination.currentPage - 1 : currentPage;

    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  }
  const noPagination = !pagination?.next && !pagination?.prev;

  return {
    noPagination,
    prevPage,
    nextPage,
  };
}
