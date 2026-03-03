export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    token?: string;
    error?: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
}