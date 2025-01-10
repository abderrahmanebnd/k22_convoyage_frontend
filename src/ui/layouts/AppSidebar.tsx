import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavGroup } from "@/ui/common/NavGroup";
import { NavUser } from "../common/NavUser";
import { sidebarData } from "@/data/sidebarData";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <p className="text-main text-lg">K22Transport</p>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        {/* TODO */}
        <NavUser user={{ name: "abdou", email: "hello@gmail.com" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
