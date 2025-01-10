import ProtectedRoute from "@/pages/Auth/ProtectedRoute";
import { ReactNode } from "react";
import { Route } from "react-router-dom";

export default function CustomRoute({
  roles,
  children,
}: {
  roles: ("admin" | "client" | "driver")[];
  children: ReactNode;
}) {
  return (
    <Route>
      <ProtectedRoute roles={roles}>{children}</ProtectedRoute>
    </Route>
  );
}
