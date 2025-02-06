import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavGroup } from "@/ui/common/NavGroup";
import { NavUser } from "../common/NavUser";
import {
  sidebarDataAdmin,
  sidebarDataClient,
  sidebarDataDriver,
} from "@/data/sidebarData";
import { useAuth } from "@/context/AuthProvider";
import { SidebarData } from "@/lib/types";
import MiniLoader from "../common/MiniLoader";
import CustomButton from "../common/CustomButton";
import { IconChecklist } from "@tabler/icons-react";
import { useMissions } from "@/context/Admin/MissionsProvider";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = useAuth();
  const { setOpen } = useMissions();

  let sidebarData: SidebarData;
  if (!loading)
    sidebarData =
      user?.role === "admin"
        ? sidebarDataAdmin
        : user?.role === "client"
        ? sidebarDataClient
        : sidebarDataDriver;

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <h1 className="text-main font-semibold text-xl text-center mb-3">
          K22Transport
        </h1>
        {user?.role === "admin" && (
          <CustomButton
            primary
            className="mx-1 text-base"
            onClick={() => setOpen("add")}
          >
            <IconChecklist size={20} />
            Create mission
          </CustomButton>
        )}
      </SidebarHeader>
      <SidebarContent>
        {loading ? (
          <MiniLoader />
        ) : (
          sidebarData?.navGroups?.map((props) => (
            <NavGroup key={props.title} {...props} />
          ))
        )}
      </SidebarContent>
      <SidebarFooter>
        {/* TODO */}

        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
