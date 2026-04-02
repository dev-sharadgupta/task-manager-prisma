import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMeQuery } from "../api";
import { Mail, User } from "lucide-react";

export default function Me() {
    const { data, isLoading } = useMeQuery();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <Card className="w-full max-w-md border-0 shadow-xl py-10 text-center space-y-5">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-cente">
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
            </Card>
        </div>
    );
}