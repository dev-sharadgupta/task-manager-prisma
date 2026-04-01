import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SignupFromValue, signupSchema } from "../core/constants";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../api";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, UserCircle2 } from "lucide-react";

export default function SignupForm() {
    const [signup, { isLoading }] = useSignupMutation();
    const navigate = useNavigate();
    const [showPassword, setShowPassowd] = useState(false);
    const [showConfirmPassword, setShowConfirmPassowd] = useState(false);

    const form = useForm<SignupFromValue>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const handleSingup = async (values: SignupFromValue) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, ...payload } = values;

            const response = await signup(payload).unwrap();
            toast.success(response.message);
            navigate("/auth/login");

        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <Card className="w-full max-w-md border-0 shadow-xl space-y-4 px-3 py-10">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-blue-900">Create an Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={form.handleSubmit(handleSingup)}
                    >
                        <FieldSet>
                            <FieldGroup>
                                <Controller
                                    name="username"
                                    control={form.control}
                                    render={({ field, fieldState }) =>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="username">Username<span className="text-red-500">*</span></FieldLabel>
                                            <div className="relative flex items-center">
                                                <UserCircle2
                                                    className="size-4.5 absolute left-2 text-gray-500"
                                                />
                                                <Input
                                                    {...field}
                                                    id="username"
                                                    autoComplete="off"
                                                    placeholder="John Doe"
                                                    aria-invalid={fieldState.invalid}
                                                    className="pl-8"
                                                />
                                            </div>
                                            {fieldState.error && (
                                                <FieldError> {fieldState.error.message}</FieldError>
                                            )}
                                        </Field>
                                    }
                                />
                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) =>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="email">Email<span className="text-red-500">*</span></FieldLabel>
                                            <div className="relative flex items-center">
                                                <Mail
                                                    className="size-4.5 absolute left-2 text-gray-500"
                                                />
                                                <Input
                                                    {...field}
                                                    id="email"
                                                    autoComplete="off"
                                                    placeholder="abc@abc.com"
                                                    aria-invalid={fieldState.invalid}
                                                    className="pl-8"
                                                />
                                            </div>

                                            {fieldState && (
                                                <FieldError>{fieldState.error?.message}</FieldError>
                                                // <FieldError errors={[fieldState.error]}></FieldError>
                                            )}
                                        </Field>

                                    }
                                />

                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) =>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="password">Password<span className="text-red-500">*</span></FieldLabel>
                                            <div className="relative flex items-center">
                                                <Lock
                                                    className="size-4.5 absolute left-2 text-gray-500"
                                                />
                                                <Input
                                                    {...field}
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    autoComplete="off"
                                                    placeholder="Password"
                                                    aria-invalid={fieldState.invalid}
                                                    className="pl-8 pr-8"
                                                />
                                                <Button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();     // stops form submit
                                                        e.stopPropagation();    // stops bubbling to parent
                                                        setShowPassowd(!showPassword)
                                                    }}
                                                    className="absolute right-0 text-gray-500 hover:text-black bg-transparent">
                                                    {showPassword ? <Eye /> : <EyeOff />}
                                                </Button>
                                            </div>
                                            {fieldState && (
                                                <FieldError>{fieldState.error?.message}</FieldError>
                                            )}
                                        </Field>
                                    }
                                />

                                <Controller
                                    name="confirmPassword"
                                    control={form.control}
                                    render={({ field, fieldState }) =>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="confirmPassword">Confirm Password<span className="text-red-500">*</span></FieldLabel>
                                            <div className="relative flex items-center">
                                                <Lock
                                                    className="size-4.5 absolute left-2 text-gray-500"
                                                />
                                                <Input
                                                    {...field}
                                                    id="confirmPassword"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    autoComplete="off"
                                                    placeholder="Confirm password"
                                                    aria-invalid={fieldState.invalid}
                                                    className="pl-8 pr-8"
                                                />
                                                <Button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();     // stops form submit
                                                        e.stopPropagation();    // stops bubbling to parent
                                                        setShowConfirmPassowd(!showConfirmPassword)
                                                    }}
                                                    className="absolute right-0 text-gray-500 hover:text-black bg-transparent">
                                                    {showConfirmPassword ? <Eye /> : <EyeOff />}
                                                </Button>
                                            </div>
                                            {fieldState && (
                                                <FieldError>{fieldState.error?.message}</FieldError>
                                            )}
                                        </Field>
                                    }
                                />

                            </FieldGroup>
                        </FieldSet>
                        <Field orientation="vertical" className="mt-5">
                            <Button
                                type="submit"
                                className=" bg-blue-600 hover:bg-blue-700 p-4.5"
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating account..." : "Sign Up"}</Button>
                        </Field>

                        <Field orientation="vertical" className="mt-5">
                            <p className="text-gray-600 flex justify-center gap-1">
                                Already have an account?
                                <Link to="/auth/login" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors">
                                    Login
                                </Link>
                            </p>
                        </Field>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}