import { Navigate, Outlet } from "react-router";

export function ProtectedArea({ children }) {
  const registered = localStorage.getItem("currentUser");

  if (!registered) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}
