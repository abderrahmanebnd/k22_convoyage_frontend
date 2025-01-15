import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "@/ui/common/DataTableColumnHeader";
import LongText from "@/ui/common/LongText";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Mission = {
  _id: string;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "cancelled";
  assignedDriver: {
    _id: string;
    name: string;
    email: string;
  };
  carMatricule: string;
  createdAt: string;
};

export const columns: ColumnDef<Mission>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    meta: {
      className: cn(
        "sticky md:table-cell left-0 z-10 rounded-tl",
        "bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted"
      ),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <LongText className="max-w-36">{row.getValue("title")}</LongText>
    ),
    meta: {
      className: cn(
        "drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none",
        "bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted",
        "sticky left-6 md:table-cell"
      ),
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <LongText className="max-w-72 break-words">
        {row.getValue("description")}
      </LongText>
    ),
    // meta: {
    //   className: cn(
    //     "drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none",
    //     "bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted",
    //     "sticky left-6 md:table-cell"
    //   ),
    // },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "assignedDriver.name",
    id: "assignedDriverName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver Name" />
    ),
    cell: ({ row }) => (
      <LongText className="max-w-36">
        {row.getValue("assignedDriverName")}
      </LongText>
    ),
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "assignedDriver.email",
    id: "assignedDriverEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver Email" />
    ),
    cell: ({ row }) => (
      <div className="w-fit text-wrap">
        {row.getValue("assignedDriverEmail")}
      </div>
    ),
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const { status } = row.original;
      const badgeColor =
        status.toLowerCase() === "completed"
          ? "bg-teal-100/30 text-teal-600 dark:text-teal-200 border-teal-200"
          : status.toLowerCase() === "cancelled"
          ? "bg-red-100/30 text-red-600 dark:text-red-200 border-red-200"
          : status.toLowerCase() === "in_progress"
          ? "bg-yellow-100/30 text-yellow-600 dark:text-yellow-200 "
          : " ";
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn("capitalize", badgeColor)}>
            {row.getValue("status")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "carMatricule",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client Matricule" />
    ),
    cell: ({ row }) => (
      <div className="w-fit text-nowrap">{row.getValue("carMatricule")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      const formattedDate = new Date(createdAt).toLocaleDateString(); // Formatting the date
      return <div>{formattedDate}</div>;
    },
    enableSorting: false,
  },
  {
    id: "actions",
    // cell: DataTableRowActions,
  },
];

type MissionTableProps = {
  columns: ColumnDef<Mission>[];
  data: Mission[];
};

export default function MissionsTable({ columns, data }: MissionTableProps) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {/* <DataTableToolbar table={table} /> */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="group/row">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={header.column.columnDef.meta?.className ?? ""}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="group/row"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cell.column.columnDef.meta?.className ?? ""}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns?.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <DataTablePagination table={table} /> */}
    </div>
  );
}
