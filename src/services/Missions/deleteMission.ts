import { useMutation } from "@tanstack/react-query";
import axiosPrivate from "../axios";

// this for the admin
export async function deleteMission({ missionId }: { missionId: string }) {
  const response = await axiosPrivate.delete(`/missions/${missionId}`);
  return response.data;
}
export function useDeleteMission() {
  return useMutation({ mutationFn: deleteMission });
}
