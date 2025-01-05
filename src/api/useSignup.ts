import { signupApi } from "./auth";
import { useMutation } from "@tanstack/react-query";

// Ensure that signupApi returns the expected response type, here I assume it's any, but you can type it specifically
export function useSignup() {
  return useMutation({ mutationFn: signupApi });
}
