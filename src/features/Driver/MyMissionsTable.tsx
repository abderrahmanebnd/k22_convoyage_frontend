import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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
import { Mission } from "@/services/Missions/getMissions";

import { Pagination } from "@/lib/types";
import { DataTablePagination } from "../../ui/common/PaginationTable";
import { DriverMissionTableRowActions } from "./DriverMissionTableRowActions";

export const columns: ColumnDef<Mission>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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

    enableHiding: false,
    enableSorting: false,
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Statut" />
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

      const statusEnFrench =
        status === "completed"
          ? "Terminé"
          : status === "cancelled"
          ? "Annulé"
          : "En cours";
      return (
        <div className="flex space-x-2">
          <Badge variant="outline" className={cn("capitalize", badgeColor)}>
            <LongText>{statusEnFrench}</LongText>
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
      <DataTableColumnHeader column={column} title="Matricule" />
    ),
    cell: ({ row }) => (
      <div className="w-fit text-nowrap">{row.getValue("carMatricule")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Créé le" />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      const formattedDate = new Date(createdAt as string).toLocaleDateString(); // Formatting the date
      return <div>{formattedDate}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "_id",
    id: "missionId",
    header: "Mission ID",
    cell: ({ row }) => <div>{row.getValue("_id")}</div>,
    enableSorting: false,
  },
  {
    id: "actions",
    cell: DriverMissionTableRowActions,
  },
];

type MissionTableProps = {
  data: Mission[];
  pagination: Pagination;
};

export default function MissionsTable({ data, pagination }: MissionTableProps) {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    initialState: {
      columnVisibility: {
        missionId: false,
      },
    },
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* <DataTableToolbar table={table} /> */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <TableRow key={headerGroup.id} className="group/row">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={
                        //@ts-expect-error className does not exist on meta tag
                        header.column.columnDef.meta?.className ?? ""
                      }
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
                      className={
                        //@ts-expect-error className does not exist on meta tag
                        cell.column.columnDef.meta?.className ?? ""
                      }
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
      <DataTablePagination pagination={pagination} />
    </div>
  );
}
