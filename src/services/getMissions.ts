import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "./axios";

export type Mission = {
  _id: string;
  title: string;
  status: "completed" | "in_progress" | "cancelled";
  assignedDriver: {
    _id: string;
    name: string;
    email: string;
  };
  carMatricule: string;
};

// this for the admin
export async function getMissions() {
  const response = await axiosPrivate.get("/missions");
  return response.data.missions;
}
export function useMissions() {
  const {
    data: missions,
    isPending: loading,
    error,
  } = useQuery<Mission, Error>({
    queryKey: ["missions"],
    queryFn: () => getMissions(),
  });

  return {
    missions,
    loading,
    error,
  };
}
