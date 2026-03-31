import { useAppSelector } from "@/_redux/hooks";
import { setRedirectPath } from "@/pages/auth/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {

    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(setRedirectPath(location.pathname)); // dispatch new pathname if user change the page
        }
    }, [isAuthenticated, location.pathname, dispatch]);

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
}