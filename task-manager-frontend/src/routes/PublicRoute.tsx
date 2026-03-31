import { useAppSelector } from "@/_redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {

    const { isAuthenticated, redirectPath } = useAppSelector((state) => state.auth); // get the auth state

    if (isAuthenticated) return <Navigate to={redirectPath} />

    return <Outlet />  // render the child route
}