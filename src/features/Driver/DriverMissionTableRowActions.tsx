import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { IconCheckbox } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mission } from "@/services/Missions/getMissions";
import { useUpdateMission } from "@/services/Missions/updateMission";
import {
  displayErrorToast,
  displaySuccessToast,
} from "@/ui/common/CustomAlert";
import { useQueryClient } from "@tanstack/react-query";

interface MissionTableRowActions {
  row: Row<Mission>;
}

export function DriverMissionTableRowActions({ row }: MissionTableRowActions) {
  const queryClient = useQueryClient();
  const { mutate: update, isPending: updating } = useUpdateMission();
  const handleUpdate = () => {
    update(
      {
        missionId: row.getValue("missionId"),
        // @ts-expect-error we are sending only status and it expect MissionToSent with title...
        data: {
          status: "completed",
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/missions"] });
          displaySuccessToast("Mission terminée avec succès !");
        },
        onError: () => {
          displayErrorToast();
        },
      }
    );
  };
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={handleUpdate}
            disabled={updating}
            className="text-green-500 hover:bg-green-50 cursor-pointer"
          >
            Terminer
            <DropdownMenuShortcut>
              <IconCheckbox size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
