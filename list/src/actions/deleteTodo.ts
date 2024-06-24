import supabase from "../utils/supabase";


export default async function deleteTodo(todoId: number) {

    if (!todoId) {
        return;
    }

    const {data, error} = await supabase
        .from("todos")
        .delete()
        .eq("id", todoId);


    if (error) {
        console.error("Error deleting todo:", error);
        return;
    }
}
