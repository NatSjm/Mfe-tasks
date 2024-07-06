export interface Task {
    id?: number;
    name: string;
    description: string;
    deadline: string;
    priority: string;
    completed: boolean;
}

export interface Errors {
    name: string;
    description: string;
    priority: string;
    deadline: string;
}