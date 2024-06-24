import  supabase from "../utils/supabase";
import {Task} from "../types.ts";

export default async function getTodo(id) {
    const {data, error} = await supabase
        .from('todos')
        .select()
        .eq('id', id)
        .single();


    if (error) {
        console.log('error',error)
    }
     console.log('data',data)
    return data;
}
