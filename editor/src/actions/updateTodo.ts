import  supabase from "../utils/supabase";
import {Task} from "../types.ts";

export default async function addTodo(task: Omit<Task, 'completed'>) {
    const {id, ...rest} = task;
    const {data, error} = await supabase
        .from('todos')
        .update(rest)
        .eq('id', id)
        .select()

    if (error) {
        throw error;
    }
}
