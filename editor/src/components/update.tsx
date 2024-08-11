import getTodo from "../actions/getTodo.ts";
import Edit from "./edit.tsx";
import {useEffect, useState} from "react";
import {Task} from "../types.ts";

const Update = ({id}) => {
    const [task, setTask] = useState<Omit<Task, 'completed'>>(null);
    const [error, setError] = useState('')
      const fetchTask = async () => {
          try{
            const data = await getTodo(id);
            setTask(data);
            }catch(error){
              setError(error.message);

          }
        }

        useEffect(() => {
                fetchTask();
        }, [id]);

    if(error) return <div className="text-red-500 font-bold p-2">{error}</div>
    if(!task && !error) return <div>Loading...</div>

    return (
        <Edit task={task} />
    )
}

export default Update;