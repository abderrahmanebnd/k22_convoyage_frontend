import { useAuth } from "@/context/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute({
  roles,
}: {
  roles: ("admin" | "client" | "driver")[];
}) {
  const navigate = useNavigate();
  const { user, loading, error } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      <Navigate to="/login" replace />;
    } else if (!roles.includes(user?.role)) {
      <Navigate to="/not-found" replace />;
    }
  }, [user, loading, error, navigate, roles]);

  if (loading) return <div>Loading...</div>;

  return <Outlet />;
}
