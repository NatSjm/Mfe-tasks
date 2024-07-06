import supabase from "../utils/supabase";
export default async function updateCompleted(id: number, completed: boolean, handleError: (error: Error) => void){

    const {data, error} = await supabase
        .from('todos')
        .update({completed})
        .eq('id', id)
        .select()

    if (error) {
        handleError(error)
    }

}
