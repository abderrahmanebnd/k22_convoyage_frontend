import { useAuth } from "@/context/AuthProvider";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Loader from "@/ui/common/Loader";

export default function ProtectedRoute({
  roles,
  children,
}: {
  roles: ("admin" | "client" | "driver")[];
  children: ReactNode;
}) {
  const { user, loading } = useAuth();

  // useEffect(() => {
  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  } else if (!roles.includes(user?.role)) {
    return <Navigate to="/not-found" replace />;
  }
  // }, [user, loading, error, navigate, roles]);

  return children;
}
