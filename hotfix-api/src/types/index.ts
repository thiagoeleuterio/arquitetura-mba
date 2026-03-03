export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}