import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import { useAdminStats, useDriverStats } from "@/services/getStats";
import MiniLoader from "@/ui/common/MiniLoader";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { ThemeSwitch } from "@/ui/common/ThemeSwitch";
import { IconChecklist, IconUsers } from "@tabler/icons-react";
import { Truck } from "lucide-react";

export default function MyMissions() {
  const { stats, loading } = useDriverStats();

  return (
    <>
      <Header>
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
          {/* <ThemeSwitch /> */}
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
                    Missions
                  </CardTitle>
                  <Truck size={20} className=" text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {loading ? <MiniLoader /> : stats?.totalMissions}
                  </div>
                  <Badge className="bg-teal-100/30 text-teal-500 dark:text-teal-200 border-teal-200">
                    {stats?.completedMissions}
                    {" terminées"}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
