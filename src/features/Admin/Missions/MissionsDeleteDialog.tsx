import { IconAlertTriangle } from "@tabler/icons-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Mission } from "@/services/Missions/getMissions";
import { ConfirmDialog } from "@/ui/common/ConfirmDialog";
import { useDeleteMission } from "@/services/Missions/deleteMission";
import { useQueryClient } from "@tanstack/react-query";
import {
  displayErrorToast,
  displaySuccessToast,
} from "@/ui/common/CustomAlert";

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
  const queryClient = useQueryClient();
  const { mutate: deleteMission, isPending } = useDeleteMission();
  const handleDelete = () => {
    if (!currentRow?._id) {
      displayErrorToast("Mission ID is missing.");
      return;
    }
    deleteMission(
      { missionId: currentRow._id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/missions"] });
          displaySuccessToast("supprimé avec succès");
          onOpenChange(false);
        },
        onError: () => {
          displayErrorToast();
        },
      }
    );
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={isPending}
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
            <AlertTitle>Attention!</AlertTitle>
            <AlertDescription>
              Veuillez faire attention, cette opération ne peut pas être
              annulée.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText="Delete"
      destructive
    />
  );
}
