import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../axios";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@/lib/types";

// Define Mission type
export type Mission = {
  _id: string;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "cancelled";
  assignedDriver: {
    _id: string;
    name: string;
    email: string;
  };
  carMatricule: string;
  createdAt: string;
};

// Define response structure for missions API
export type MissionResponse = {
  missions: Mission[];
  pagination: Pagination;
};

// API function to fetch missions
export async function getMissions(page: number): Promise<MissionResponse> {
  const response = await axiosPrivate.get<MissionResponse>(
    `/missions?page=${page}`
  );
  return response.data;
}

// Custom hook to fetch and manage missions
export function useGetMissions() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Extract and parse the page number from search params
  const page = Number(searchParams.get("page")) || 1;

  // Fetch missions with React Query
  const { data, isLoading, isError, error } = useQuery<MissionResponse, Error>({
    queryKey: ["missions", page],
    queryFn: () => getMissions(page),
  });

  if (data?.pagination?.next) {
    queryClient.prefetchQuery({
      queryKey: ["missions", page + 1],
      queryFn: () => getMissions(page + 1),
    });
  }

  if (data?.pagination?.prev) {
    queryClient.prefetchQuery({
      queryKey: ["missions", page - 1],
      queryFn: () => getMissions(page - 1),
    });
  }

  return {
    missions: data?.missions || [],
    pagination: data?.pagination || {
      total: 0,
      currentPage: 0,
      totalPages: 0,
      next: false,
      prev: false,
    },
    loading: isLoading,
    error: isError ? error : null,
  };
}
