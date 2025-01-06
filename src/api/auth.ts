import axiosPrivate from "./axios";
import { LoginFormValues, SignUpFormValues } from "../lib/types";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

export async function signupApi(data: SignUpFormValues) {
  try {
    const response = await axiosPrivate.post("/users/signup", data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data.message;
    else if (error instanceof Error) return error.message;
    else return "Something went wrong, Try Later!";
  }
}

export async function loginApi(data: LoginFormValues) {
  try {
    const response = await axiosPrivate.post("/users/login", data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data.message;
    else if (error instanceof Error) return error.message;
    else return "Something went wrong, Try Later!";
  }
}

// export function logout() {
//   return axios.post("/auth/logout");
// }

// export function getCurrentUser() {
//   return axios.get("/auth/user");
// }

export function useSignup() {
  return useMutation({ mutationFn: signupApi });
}

export function useLogin() {
  return useMutation({ mutationFn: loginApi });
}
