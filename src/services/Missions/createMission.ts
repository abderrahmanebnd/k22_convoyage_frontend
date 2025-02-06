import { useMutation } from "@tanstack/react-query";
import axiosPrivate from "../axios";

export type MissionToSent = {
  title: string;
  description: string;
  status: "completed" | "in_progress" | "cancelled";
  assignedDriver: string;
  carMatricule: string;
};

// createMission expects a single object argument
export async function createMission({ data }: { data: MissionToSent }) {
  const response = await axiosPrivate.post(`/missions`, data);
  return response.data.mission;
}

// Pass the function directly to useMutation
export function useCreateMission() {
  return useMutation({
    mutationFn: createMission,
  });
}
