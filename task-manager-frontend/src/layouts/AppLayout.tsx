import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Outlet, useNavigate } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LogOut, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { useLogoutMutation } from "@/pages/auth/api"
import { clearAuthenticated } from "@/pages/auth/slice"
import { toast } from "sonner"
import { useAppDispatch } from "@/_redux/hooks"



export default function AppLayout() {
    const { dark, toggle } = useTheme();
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

    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="flex flex-col h-screen overflow-hidden">
                    <header className="flex items-center gap-2 px-4 py-3 bg-background border-b justify-between">
                        <SidebarTrigger variant="default" />
                        <div className="flex items-center gap-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={toggle}>
                                        {dark ? (
                                            <Sun className="w-5 h-5 text-yellow-500" />
                                        ) : (
                                            <Moon className="w-5 h-5 text-gray-100" />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={handleLogout}
                                        className="flex items-center text-xs">
                                        <LogOut className="w-5 h-5" />Logout
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Logout
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </header>
                    <main className="overflow-y-auto">
                        <Outlet />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
}