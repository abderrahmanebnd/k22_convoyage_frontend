import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import MissionsProvider from "@/context/Admin/MissionsProvider";

export default function DashboardLayout() {
  return (
    // <ThemeProvider>
    <SidebarProvider defaultOpen={true}>
      <MissionsProvider>
        {/* <SkipToMain /> */}
        {/* <p>hello</p> */}
        <AppSidebar />
        <div
          id="content"
          className={cn(
            "max-w-full w-full ml-auto",
            "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
            "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "transition-[width] ease-linear duration-200",
            "h-vh flex flex-col",
            "group-data-[scroll-locked=1]/body:h-full",
            "group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh  "
          )}
        >
          <Outlet />
        </div>
      </MissionsProvider>
    </SidebarProvider>
    // </ThemeProvider>
  );
}
