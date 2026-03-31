import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, type SinginFormValue } from "../core/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../slice";

export default function SigninForm() {
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm<SinginFormValue>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            identifier: "",
            password: ""
        }
    })

    const handleLogin = async (values: SinginFormValue) => {
        try {
            const response = await login(values).unwrap();

            // Store the user
            dispatch(setUser(response.user));

            toast.success(response.message);
            navigate("/landing");

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <Card className="w-full max-w-md border-0 shadow-xl space-y-1 px-3 py-10">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-blue-900">
                        Welcome Back
                    </CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={form.handleSubmit(handleLogin)}
                    >
                        <FieldSet>
                            <FieldGroup>

                                <Controller
                                    name="identifier"
                                    control={form.control}
                                    render={({ field, fieldState }) =>
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="indetifier">Username or Email<span className="text-red-500">*</span></FieldLabel>
                                            <Input
                                                {...field}
                                                id="identifier"
                                                autoComplete="off"
                                                placeholder="Username or Email"
                                                aria-invalid={fieldState.invalid}
                                            />
                                            {fieldState.error && (
                                                <FieldError>{fieldState.error.message}</FieldError>
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
                                            <Input
                                                {...field}
                                                id="password"
                                                autoComplete="off"
                                                placeholder="Password"
                                                aria-invalid={fieldState.invalid}
                                            />
                                            {fieldState.error && (
                                                <FieldError>{fieldState.error.message}</FieldError>
                                            )}
                                        </Field>

                                    }
                                />

                            </FieldGroup>
                        </FieldSet>

                        <Field orientation="vertical" className="mt-5">
                            <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 p-4.5"
                                disabled={isLoading}
                            >
                                {isLoading ? "Logging in..." : "Login"}
                            </Button>
                        </Field>

                        <Field className="mt-5">
                            <p className="text-gray-600 flex justify-center gap-1">
                                Don't have an account?
                                <Link to="/auth/signup" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </Field>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
}