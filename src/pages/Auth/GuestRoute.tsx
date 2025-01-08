import { useAuth } from "@/context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default GuestRoute;
