import { displayErrorToast } from "@/ui/common/CustomAlert";
import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;

      // Check if the user is not on the /login or /signup path
      if (currentPath !== "/login" && currentPath !== "/signup") {
        // Reload the page
        window.location.href = "/login";
        displayErrorToast(
          "Veuillez vous reconnecter, votre session a expiré !"
        );
      }
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
