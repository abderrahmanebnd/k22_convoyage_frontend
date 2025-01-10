import { useAuth } from "@/context/AuthProvider";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({
  roles,
  children,
}: {
  roles: ("admin" | "client" | "driver")[];
  children: ReactNode;
}) {
  const { user, loading } = useAuth();

  // useEffect(() => {
  if (loading) return;

  if (!user) {
    return <Navigate to="/login" replace />;
  } else if (!roles.includes(user?.role)) {
    return <Navigate to="/not-found" replace />;
  }
  // }, [user, loading, error, navigate, roles]);

  if (loading) return <div>Loading...</div>;

  return children;
}
