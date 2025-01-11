import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { ThemeSwitch } from "@/ui/common/ThemeSwitch";
import {
  IconCar,
  IconChecklist,
  IconSubtask,
  IconTableSpark,
  IconUsers,
} from "@tabler/icons-react";
import { Truck } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Header>
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
        </div>
        <div>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium ">
                    Chauffeurs
                  </CardTitle>
                  <Truck size={20} className=" text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    $45,231.89
                  </div>
                  {/* <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clients</CardTitle>
                  <IconUsers size={20} className=" text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">+2350</div>
                  {/* <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Missions
                  </CardTitle>
                  <IconChecklist size={20} className=" text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% Complété</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
