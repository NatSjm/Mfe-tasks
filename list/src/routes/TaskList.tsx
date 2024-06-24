//import {createClient} from "@/utils/supabase/server";
import {getColumns} from "@/components/columns"
import {DataTable} from "@/components/DataTable"
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../App";




export default  function TaskList() {
    const onNavigateContext = useContext(NavigationContext);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        try {
            const {data} = await supabase.from("todos").select();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching countries', error);
        }
    }

    const columns = getColumns(getCountries, onNavigateContext?.onNavigate);


    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Tasks</h1>
            <Link to="/about" className="mb-4 inline-block text-blue-500 underline">Time management tips</Link>
            <DataTable columns={columns} data={tasks || []} getCountries={getCountries}/>
        </div>
    )
}
