import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "./axios";

export type Mission = {
  _id: string;
  title: string;
  status: "completed" | "in_progress" | "canceled";
  assignedDriver: {
    _id: string;
    name: string;
    email: string;
  };
  carMatricule: string;
};

// this for the admin
export async function getMissions(params: unknown) {
  const response = await axiosPrivate.get("/missions", {
    params: params,
  });
  return response.data.missions;
}
export function useMissions(params: unknown) {
  const {
    data: missions,
    isPending: loading,
    error,
  } = useQuery<Mission, Error>({
    queryKey: ["missions", params],
    queryFn: (params) => getMissions(params),
  });

  return {
    missions,
    loading,
    error,
  };
}
