import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLogoutMutation, useMeQuery } from "../api";
import { LogOut, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/_redux/hooks";
import { clearAuthenticated } from "../slice";

export default function Me() {
    const { data, isLoading } = useMeQuery();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            const response = await logout().unwrap();

            // Set the Logout value false
            dispatch(clearAuthenticated());

            toast.success(response.message);
            navigate("/auth/login");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any 
        catch (error: any) {
            toast.error(error.message);
        }
    }

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <Card className="w-full max-w-md border-0 shadow-xl py-10 text-center space-y-5">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-blue-900">
                        User Profile
                    </CardTitle>
                    <CardDescription>
                        User Profile Information
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    <div className="flex items-center justify-center gap-2">
                        <User className="size-6 rounded-full bg-gray-300 p-1" />
                        <p className="text-xl font-semibold">Welcome, {data?.user.username}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="size-6 rounded-full bg-gray-300 p-1" />
                        <p className="">{data?.user.email}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={handleLogout}
                        className="w-full p-5 flex items-center bg-red-500 hover:bg-red-600"
                    >
                        <LogOut />Logout
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}