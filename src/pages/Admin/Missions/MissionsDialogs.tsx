import { useMissions } from "@/context/Admin/MissionsProvider";
import { MissionsDeleteDialog } from "./MissionsDeleteDialog";
import MissionsActionDialog from "./MissionsActionDialog";
type Driver = {
  _id: string;
  name: string;
  email: string;
};

const drivers: Driver[] = [
  {
    _id: "6774486f32463e07fd386a30",
    name: "abderrahmane",
    email: "abderrahmane7@gmail.com",
  },
  {
    _id: "677578e89bde2dd1fb13dfc0",
    name: "abderrahmane",
    email: "abderrahmane0@gmail.com",
  },
];

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
            drivers={drivers}
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
