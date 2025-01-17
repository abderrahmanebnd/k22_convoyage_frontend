import { useMutation } from "@tanstack/react-query";
import axiosPrivate from "../axios";
import { Mission } from "./getMissions";

// createMission expects a single object argument
export async function createMission({
  data,
}: {
  missionId: string;
  data: Mission;
}) {
  const response = await axiosPrivate.post(`/missions`, data);
  return response.data.mission;
}

// Pass the function directly to useMutation
export function useCreateMission() {
  return useMutation({
    mutationFn: createMission,
  });
}
