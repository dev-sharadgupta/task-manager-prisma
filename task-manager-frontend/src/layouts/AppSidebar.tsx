import { NavLink, useLocation } from "react-router-dom"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    useSidebar,
} from "@/components/ui/sidebar"
import { Layers, LayoutDashboard, User, User2 } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
    { to: "/landing", label: "Dashboard", icon: LayoutDashboard },
    { to: "/user-profile", label: "Profile", icon: User },
]

export function AppSidebar() {
    const location = useLocation()
    const { open: isSidebarOpen, isMobile } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className={cn(
                    "px-2 flex items-center gap-2 w-full h-14",
                    !isSidebarOpen && !isMobile && "w-14 px-0"

                )}>
                    <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500 to-violet-600">
                        <Layers size="15" className="text-white" />
                    </div>
                    {(isSidebarOpen || isMobile) && (
                        <p className="font-bold">
                            Task Manager
                        </p>
                    )}
                </div>

            </SidebarHeader>
            <SidebarSeparator className="mx-0" />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.to}
                                >
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.label}
                                        isActive={location.pathname === item.to}
                                        size="default"
                                        className={cn(
                                            "data-[active=true]:bg-primary",
                                            "data-[active=true]:text-primary-foreground",
                                            "group-hover/menu-item:bg-primary!",
                                            "group-hover/menu-item:text-primary-foreground!",
                                        )}
                                    >
                                        <NavLink to={item.to}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <User2 /> Username
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    )
}
