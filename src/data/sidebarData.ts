import {
  IconChecklist,
  IconLayoutDashboard,
  IconCar,
} from "@tabler/icons-react";
import { type SidebarData } from "../lib/types";

export const sidebarDataAdmin: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: IconLayoutDashboard,
        },
        {
          title: "Missions",
          url: "/missions",
          icon: IconChecklist,
        },
      ],
    },
  ],
};
export const sidebarDataDriver: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "My Missions",
          url: "/my-missions",
          icon: IconChecklist,
        },
      ],
    },
  ],
};
export const sidebarDataClient: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Recherche",
          url: "/search",
          icon: IconCar,
        },
        // {
        //   title: "Missions",
        //   url: "/missions",
        //   icon: IconChecklist,
        // },
      ],
    },

    // {
    //   title: "Other",
    //   items: [
    //     {
    //       title: "Settings",
    //       icon: IconSettings,
    //       items: [
    //         {
    //           title: "Profile",
    //           url: "/profile",
    //           icon: IconUserCog,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
