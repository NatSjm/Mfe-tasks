import supabase from "../utils/supabase";


export default async function deleteTodo(todoId: number, handleError: (error: Error) => void) {

    if (!todoId) {
        return;
    }

    const {data, error} = await supabase
        .from("todos")
        .delete()
        .eq("id", todoId);


    if (error) {
        handleError(error)
    }
}
