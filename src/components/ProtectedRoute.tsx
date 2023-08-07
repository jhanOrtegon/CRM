import { ReactElement } from 'react';
import { Navigate, Outlet } from "react-router-dom";

type TProtectedRoute = {
  isAllowed: boolean,
  redirectTo?: string,
  children?: ReactElement | string
}

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}: TProtectedRoute) => {

  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};