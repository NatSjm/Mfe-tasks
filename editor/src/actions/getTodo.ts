import  supabase from "../utils/supabase";

export default async function getTodo(id) {
    const {data, error} = await supabase
        .from('todos')
        .select()
        .eq('id', id)
        .single();


    if (error) {
        throw new Error(error.message);
    }
    return data;
}
