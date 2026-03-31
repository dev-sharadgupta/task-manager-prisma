type AuthUser = {
    id: number;
    username: string;
    email: string;
}

type AuthState = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    redirectPath: string;
}


type SignupRequest = {
    email: string;
    username: string;
    password: string;
}

type SignupResponse = {
    message: string;
    user: AuthUser
};


type SignupRequest = {
    email: string;
    username: string;
    password: string;
}

type LoginRequest = {
    identifier: string;
    password: string;
}

type LoginResponse = {
    message: string;
    user: AuthUser;
}

type AuthUserResponse = {
    message: string;
    user: AuthUser;
}

type LogoutResponse = {
    message: string;
}