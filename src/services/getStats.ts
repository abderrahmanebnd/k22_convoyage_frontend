import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "./axios";

type Stats = {
  totalUsers: number;
  totalClients: number;
  totalChauffeurs: number;
  totalMissions: number;
  completedMissions: number;
};

export async function getStats() {
  const response = await axiosPrivate.get("/stats");
  return response.data.data;
}
export function useStats() {
  const {
    data: stats,
    isPending: loading,
    error,
  } = useQuery<Stats, Error>({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  return {
    stats,
    loading,
    error,
  };
}
