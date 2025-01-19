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
// Generalized API function to fetch missions
export async function fetchMissions(
  endpoint: string,
  page: number
): Promise<MissionResponse> {
  const response = await axiosPrivate.get<MissionResponse>(
    `/missions${endpoint}?page=${page}`
  );

  return response.data;
}

// Custom hook to fetch and manage missions
export function useGetMissions(endpoint: string = "") {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Extract and parse the page number from search params
  const page = Number(searchParams.get("page")) || 1;

  // Fetch missions with React Query
  const { data, isLoading, isError, error } = useQuery<MissionResponse, Error>({
    queryKey: [endpoint, page],
    queryFn: () => fetchMissions(endpoint, page),
  });

  // Prefetch next and previous pages if available
  if (data?.pagination?.next) {
    queryClient.prefetchQuery({
      queryKey: [endpoint, page + 1],
      queryFn: () => fetchMissions(endpoint, page + 1),
    });
  }

  if (data?.pagination?.prev) {
    queryClient.prefetchQuery({
      queryKey: [endpoint, page - 1],
      queryFn: () => fetchMissions(endpoint, page - 1),
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
