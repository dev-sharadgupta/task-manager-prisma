import { useAppSelector } from "@/_redux/hooks";
import { useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {

    const { isAuthenticated, redirectPath } = useAppSelector((state) => state.auth); // get the auth state
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("light");
    }, [setTheme]);

    if (isAuthenticated) return <Navigate to={redirectPath} />

    return <Outlet />  // render the child route
}
