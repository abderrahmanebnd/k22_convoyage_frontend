import { useMissions } from "@/context/Admin/MissionsProvider";
import { MissionsDeleteDialog } from "./MissionsDeleteDialog";

export function MissionsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useMissions();
  return (
    <>
      {/* <MissionsActionDialog
        key="user-add"
        open={open === "add"}
        onOpenChange={() => setOpen("add")}
      /> */}

      {currentRow && (
        <>
          {/* <MissionsActionDialog
            key={`user-edit-${currentRow.id}`}
            open={open === "edit"}
            onOpenChange={() => {
              setOpen("edit");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          /> */}

          <MissionsDeleteDialog
            key={`user-delete-${currentRow._id}`}
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />
        </>
      )}
    </>
  );
}
