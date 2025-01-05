import axiosPrivate from "./axios";
import { SignUpFormValues } from "../lib/types";

export async function signupApi(data: SignUpFormValues) {
  try {
    console.log(data);
    console.log("data");

    const response = await axiosPrivate.post("/users/signup", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error;
  }
}

// export function logout() {
//   return axios.post("/auth/logout");
// }

// export function getCurrentUser() {
//   return axios.get("/auth/user");
// }
