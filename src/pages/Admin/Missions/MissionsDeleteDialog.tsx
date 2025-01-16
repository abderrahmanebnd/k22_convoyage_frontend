import { useState } from "react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mission } from "@/services/getMissions";
import { ConfirmDialog } from "@/ui/common/ConfirmDialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow: Mission;
}

export function MissionsDeleteDialog({
  open,
  onOpenChange,
  currentRow,
}: Props) {
  const [value, setValue] = useState("");

  const handleDelete = () => {
    onOpenChange(false);
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      // disabled={value.trim() !== currentRow.title}
      title={
        <span className="text-destructive">
          <IconAlertTriangle
            className="mr-1 inline-block stroke-destructive"
            size={18}
          />{" "}
          Supprimer la Mission
        </span>
      }
      desc={
        <div className="space-y-4">
          <p className="mb-2">
            Êtes-vous sûr de vouloir supprimer{" "}
            <span className="font-bold">{currentRow.title}</span>?
            <br />
            Cette action supprimera définitivement la mission du système. Cela
            ne peut pas être annulé.
          </p>

          <Alert variant="destructive">
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>
              Please be carefull, this operation can not be rolled back.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText="Delete"
      destructive
    />
  );
}
