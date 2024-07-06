import {Errors, Task} from "../types.ts";

export const initialErrors: Errors = {
    name: '',
    description: '',
    priority: '',
    deadline: ''
}


export const checkErrors = (data: Omit<Task, 'completed'>) => {
    const errors = {...initialErrors};
    if (!data.name) {
        errors.name = 'Name is required';
    }
    if (!data.description) {
        errors.description = 'Description is required';
    }
    if (!data.priority) {
        errors.priority = 'Priority is required';
    }
    if (!data.deadline) {
        errors.deadline = 'Deadline is required';
    }

    const date = new Date(data.deadline);
    if(isNaN(date.getTime())){
        errors.deadline = 'Invalid date';
    }
    return errors;
}