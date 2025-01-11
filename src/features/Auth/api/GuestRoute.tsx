import { useAuth } from "@/context/AuthProvider";
import Loader from "@/ui/common/Loader";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { user, loading } = useAuth();
  const to =
    user?.role === "admin"
      ? "/dashboard"
      : user?.role === "client"
      ? "/search"
      : "/my-missions";

  if (loading) return <Loader />;

  return !user ? <Outlet /> : <Navigate to={to} replace />;
};

export default GuestRoute;
