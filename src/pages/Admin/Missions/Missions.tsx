import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { useMissions } from "@/context/Admin/MissionsProvider";
import MissionsTable from "@/features/Admin/Missions/MissionsTable";
import { useGetMissions } from "@/services/Missions/getMissions";
import Loader from "@/ui/common/Loader";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { MissionsDialogs } from "../../../features/Admin/Missions/MissionsDialogs";
import CustomButton from "@/ui/common/CustomButton";
import { IconChecklist } from "@tabler/icons-react";

export default function Missions() {
  // Parse user list
  const { missions, pagination, loading } = useGetMissions("/missions");
  const { setOpen } = useMissions();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header fixed>
        {/* <Search /> */}
        <div className="ml-auto flex items-center space-x-4">
          {/* <ThemeSwitch /> */}
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Liste des Missions
            </h2>
            <p className="text-muted-foreground">
              Organisez et supervisez vos missions avec efficacité et clarité.
            </p>
          </div>
          <CustomButton
            primary
            className="mx-1 text-base"
            onClick={() => setOpen("add")}
          >
            <IconChecklist size={20} />
            Create mission
          </CustomButton>{" "}
          {/* <UsersPrimaryButtons /> */}
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <MissionsTable data={missions} pagination={pagination} />
        </div>
      </Main>

      <MissionsDialogs />
    </>
  );
}
