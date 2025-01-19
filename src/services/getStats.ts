import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "./axios";

type AdminStats = {
  totalUsers: number;
  totalClients: number;
  totalChauffeurs: number;
  totalMissions: number;
  completedMissions: number;
};

type DriverStats = {
  totalMissions: number;
  completedMissions: number;
};

export async function getAdminStats() {
  const response = await axiosPrivate.get("/admin-stats");
  return response.data.stats;
}
export function useAdminStats() {
  const {
    data: stats,
    isPending: loading,
    error,
  } = useQuery<AdminStats, Error>({
    queryKey: ["admin-stats"],
    queryFn: getAdminStats,
  });

  return {
    stats,
    loading,
    error,
  };
}

export async function getDriverStats() {
  const response = await axiosPrivate.get("/driver-stats");
  return response.data.stats;
}
export function useDriverStats() {
  const {
    data: stats,
    isPending: loading,
    error,
  } = useQuery<DriverStats, Error>({
    queryKey: ["driver-stats"],
    queryFn: getDriverStats,
  });

  return {
    stats,
    loading,
    error,
  };
}
