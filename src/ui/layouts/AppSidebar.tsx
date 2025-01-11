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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = useAuth();

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
        <p className="text-main text-lg">K22Transport</p>
      </SidebarHeader>
      <SidebarContent>
        {loading ? (
          <MiniLoader />
        ) : (
          sidebarData.navGroups.map((props) => (
            <NavGroup key={props.title} {...props} />
          ))
        )}
      </SidebarContent>
      <SidebarFooter>
        {/* TODO */}

        <NavUser user={{ name: "abdou", email: "hello@gmail.com" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
