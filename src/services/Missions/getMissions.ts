import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../axios";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@/lib/types";
import { carMatriculeRegex } from "@/lib/utils";

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

export type MissionResponse = {
  missions: Mission[];
  pagination: Pagination;
};
export async function fetchMissions(
  endpoint: string,
  page: number
): Promise<MissionResponse> {
  const response = await axiosPrivate.get<MissionResponse>(
    `/missions${endpoint}?page=${page}`
  );

  return response.data;
}

export function useGetMissions(endpoint: string = "") {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError, error } = useQuery<MissionResponse, Error>({
    queryKey: [endpoint, page],
    queryFn: () => fetchMissions(endpoint, page),
  });

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
      pageSize: 0,
    },
    loading: isLoading,
    error: isError ? error : null,
  };
}

//

export async function fetchMissionsByCarMatricule(
  carMatricule: string,
  page: number
): Promise<MissionResponse> {
  const response = await axiosPrivate.get<MissionResponse>(
    `/missions/by-matricule?carMatricule=${carMatricule}&page=${page}`
  );
  return response.data;
}

export function useGetMissionsByCarMatricule(carMatricule: string = "") {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError, error } = useQuery<MissionResponse, Error>({
    queryKey: ["missions", carMatricule, page],
    queryFn: () => fetchMissionsByCarMatricule(carMatricule, page),
    enabled: !!carMatricule && carMatriculeRegex.test(carMatricule), // Ensure carMatricule is valid
  });

  if (data?.pagination?.next) {
    queryClient.prefetchQuery({
      queryKey: ["missions", carMatricule, page + 1],
      queryFn: () => fetchMissionsByCarMatricule(carMatricule, page + 1),
    });
  }

  if (data?.pagination?.prev) {
    queryClient.prefetchQuery({
      queryKey: ["missions", carMatricule, page - 1],
      queryFn: () => fetchMissionsByCarMatricule(carMatricule, page - 1),
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
      pageSize: 0,
    },
    loading: isLoading,
    error: isError ? error : null,
  };
}
