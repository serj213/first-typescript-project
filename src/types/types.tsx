export interface IUser {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ITodos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}