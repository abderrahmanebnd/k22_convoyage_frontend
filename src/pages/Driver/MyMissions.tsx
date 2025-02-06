import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";
import MyMissionsTable from "@/features/Driver/MyMissionsTable";
import { useDriverStats } from "@/services/getStats";
import { useGetMissions } from "@/services/Missions/getMissions";
import Loader from "@/ui/common/Loader";
import MiniLoader from "@/ui/common/MiniLoader";
import { ProfileDropdown } from "@/ui/common/ProfileDropdown";
import { Truck } from "lucide-react";

export default function MyMissions() {
  const { stats, loading } = useDriverStats();
  const {
    missions,
    pagination,
    loading: isGettingMissions,
  } = useGetMissions("/missions");

  return (
    <>
      <Header>
        <div className="ml-auto flex items-center space-x-4 ">
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Mes missions</h1>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium ">
                    Mes Missions
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
          {isGettingMissions ? (
            <Loader />
          ) : (
            <MyMissionsTable pagination={pagination} data={missions} />
          )}
        </div>
      </Main>
    </>
  );
}
