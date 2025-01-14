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
      // Handle automatic logout
      // displayErrorToast("Veuillez vous reconnecter, votre session a expiré !");
      // console.log(error);
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
