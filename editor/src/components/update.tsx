import getTodo from "../actions/getTodo.ts";
import Edit from "./edit.tsx";
import {useEffect, useState} from "react";
import {Task} from "../types.ts";

const Update = ({id}) => {
    const [task, setTask] = useState<Omit<Task, 'completed'>>(null);
      const fetchTask = async () => {
            const data = await getTodo(id);
            setTask(data);
        }
        useEffect(() => {
                fetchTask();
        }, [id]);


      if(!task) return <div>Loading...</div>
    return (
        <Edit task={task} />
    )
}

export default Update;