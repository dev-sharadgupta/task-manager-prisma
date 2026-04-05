export declare const signupUser: (username: string, email: string, password: string) => Promise<{
    username: string;
    email: string;
    id: number;
}>;
export declare const loginUser: (identifier: string, password: string) => Promise<{
    password: string;
    username: string;
    email: string;
    id: number;
}>;
export declare const getUserById: (userId: number) => Promise<{
    username: string;
    email: string;
    id: number;
}>;
