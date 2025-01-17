import { useMissions } from "@/context/Admin/MissionsProvider";
import { MissionsDeleteDialog } from "./MissionsDeleteDialog";
import MissionsActionDialog from "./MissionsActionDialog";

export function MissionsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useMissions();
  return (
    <>
      {/* <MissionsActionDialog
        key="mission-add"
        open={open === "add"}
        onOpenChange={() => setOpen("add")}
      /> */}

      {currentRow && (
        <>
          <MissionsActionDialog
            key={`mission-edit-${currentRow._id}`}
            open={open === "edit"}
            onOpenChange={() => {
              setOpen("edit");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />

          <MissionsDeleteDialog
            key={`mission-delete-${currentRow._id}`}
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
