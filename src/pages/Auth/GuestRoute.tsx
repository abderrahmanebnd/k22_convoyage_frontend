import { useAuth } from "@/context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { user } = useAuth();
  const to =
    user?.role === "admin"
      ? "dashboard"
      : user?.role === "client"
      ? "search"
      : "my-missions";
  return !user ? <Outlet /> : <Navigate to={to} replace />;
};

export default GuestRoute;
