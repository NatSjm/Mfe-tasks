import  supabase from "../utils/supabase";
import {Task} from "../types.ts";
export default async function addTodo(task: Omit<Task, 'completed'>) {

    const {data, error} = await supabase.from("todos").insert(task);
    if (error) {
        throw error;
    }

}
