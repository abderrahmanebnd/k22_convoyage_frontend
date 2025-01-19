import { LoginFormValues, SignUpFormValues } from "@/lib/types";
import axiosPrivate from "./axios";

import { useMutation } from "@tanstack/react-query";

export async function signupApi(data: SignUpFormValues) {
  const response = await axiosPrivate.post("/users/signup", data);
  return response.data;
}

export async function loginApi(data: LoginFormValues) {
  const response = await axiosPrivate.post("/users/login", data);
  return response.data;
}

export async function logoutApi() {
  const response = await axiosPrivate.post("/users/logout");

  return response.data;
}

// this function is used to get all the infos of the current user and also used for persistent login
export async function getMeApi() {
  const response = await axiosPrivate.get("/users/me");
  return response.data.data;
}

export function useSignup() {
  return useMutation({
    mutationFn: signupApi,
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: loginApi,
    onError: (error) => console.log("Error:", error),
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: logoutApi,

    onError: (error) => console.log("Error:", error),
  });
}

// export function getCurrentUser() {
//   return axios.get("/auth/user");
// }
