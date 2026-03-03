export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface ErrorResponse {
    message: string;
    code: number;
}