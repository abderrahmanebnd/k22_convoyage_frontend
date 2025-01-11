import axiosPrivate from "./axios";
import { LoginFormValues, SignUpFormValues } from "../../../lib/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export async function signupApi(data: SignUpFormValues) {
  const response = await axiosPrivate.post("/users/signup", data);
  return response.data;
}

export async function loginApi(data: LoginFormValues) {
  const response = await axiosPrivate.post("/users/login", data);
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
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log("Error:", error),
  });
}

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      navigate(
        user?.role === "admin"
          ? "/dashboard"
          : user?.role === "client"
          ? "/search"
          : "/missions"
      );
    },
    onError: (error) => console.log("Error:", error),
  });
}

// export function logout() {
//   return axios.post("/auth/logout");
// }

// export function getCurrentUser() {
//   return axios.get("/auth/user");
// }
