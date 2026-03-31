import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    redirectPath: "/landing",  // default fallback
}

// Slice for handling authentication state
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthUser>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        clearAuthenticated: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.redirectPath = "/landing";  // reset on logout
        },

        setRedirectPath: (state, action: PayloadAction<string>) => {
            state.redirectPath = action.payload;
        },
    },
});

// Exported Actions
export const {
    setUser,
    clearAuthenticated,
    setRedirectPath,
} = authSlice.actions

// Export the reducer to combine with the store
export default authSlice.reducer;
