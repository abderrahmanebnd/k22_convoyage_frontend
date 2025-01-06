import axiosPrivate from "./axios";
import { LoginFormValues, SignUpFormValues } from "../lib/types";
import { useMutation } from "@tanstack/react-query";

export async function signupApi(data: SignUpFormValues) {
  const response = await axiosPrivate.post("/users/signup", data);
  return response.data;
}

export async function loginApi(data: LoginFormValues) {
  const response = await axiosPrivate.post("/users/login", data);
  return response.data;
}

export function useSignup() {
  return useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log("Error:", error),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log("Error:", error),
  });
}
// export function logout() {
//   return axios.post("/auth/logout");
// }

// export function getCurrentUser() {
//   return axios.get("/auth/user");
// }
