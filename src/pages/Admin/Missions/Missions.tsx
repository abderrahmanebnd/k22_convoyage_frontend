import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import MissionsProvider from "@/context/Admin/MissionsProvider";
import MissionsTable, {
  columns,
} from "@/features/Admin/Missions/MissionsTable";
import { useMissions } from "@/services/Missions/getMissions";
import Loader from "@/ui/common/Loader";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { ThemeSwitch } from "@/ui/common/ThemeSwitch";
import { MissionsDialogs } from "./MissionsDialogs";

export default function Missions() {
  // Parse user list
  const { missions, loading, error } = useMissions();

  if (loading) {
    return <Loader />;
  }
  return (
    <MissionsProvider>
      <Header fixed>
        {/* <Search /> */}
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
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
          {/* <UsersPrimaryButtons /> */}
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <MissionsTable data={missions} columns={columns} />
        </div>
      </Main>

      <MissionsDialogs />
    </MissionsProvider>
  );
}
