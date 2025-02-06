import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "./axios";
import { Driver } from "@/lib/types";

export async function getDrivers() {
  const response = await axiosPrivate.get("/users?role=driver");
  return response.data.data;
}
export function useDrivers() {
  const {
    data: drivers,
    isPending: loading,
    error,
  } = useQuery<Driver[], Error>({
    queryKey: ["drivers"],
    queryFn: getDrivers,
  });

  return {
    drivers,
    loading,
    error,
  };
}
