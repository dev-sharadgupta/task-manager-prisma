import { rootAPI } from "@/_api";
import { APIEndpoints } from "@/_api/core/constants";

const authApi = rootAPI.injectEndpoints({
    endpoints: (builder) => ({

        signup: builder.mutation<SignupResponse, SignupRequest>({
            query: (body) => ({
                url: APIEndpoints.signup,
                method: "POST",
                body,
            })
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: APIEndpoints.login,
                method: "POST",
                body,
            }),
            invalidatesTags: ["USER"]
        }),

        me: builder.query<AuthUserResponse, void>({
            query: () => ({
                url: APIEndpoints.me,
                method: "GET",
            }),
            providesTags: ["USER"]
        }),

        logout: builder.mutation<LogoutResponse, void>({
            query: () => ({
                url: APIEndpoints.logout,
                method: "POST",
            }),
            invalidatesTags: ["USER"]
        }),

    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useMeQuery,
    useLazyMeQuery,
    useLogoutMutation,
} = authApi;