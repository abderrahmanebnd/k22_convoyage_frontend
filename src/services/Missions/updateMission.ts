import { useMutation } from "@tanstack/react-query";
import axiosPrivate from "../axios";
import { Mission } from "./getMissions";
// UpdateMission expects a single object argument
export async function updateMission({
  missionId,
  data,
}: {
  missionId: string;
  data: Mission;
}) {
  const response = await axiosPrivate.patch(`/missions/${missionId}`, data);
  return response.data.mission;
}

// Pass the function directly to useMutation
export function useUpdateMission() {
  return useMutation({
    mutationFn: ({ missionId, data }: { missionId: string; data: Mission }) =>
      updateMission({ missionId, data }),
  });
}
