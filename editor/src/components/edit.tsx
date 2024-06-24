import * as React from "react";
import {useState} from "react";
import {Task} from "../types.ts";
import addTodo from "../actions/addTodo";
import updateTodo from "../actions/updateTodo";
import { useContext } from "react";
import { NavigationContext } from "../App";


interface CreateProps {
    task?: Omit<Task, 'completed'>;
}

const Edit = ({task}: CreateProps) => {
    const [data, setData] = useState<Omit<Task, 'completed'>>(task || {
        name: '',
        description: '',
        priority: 'Low',
        deadline: ''
    });

    const onNavigateContext = useContext(NavigationContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (task) {
                await updateTodo({
                    id: task.id,
                    ...data
                });
            } else {
                await addTodo({
                    ...data
                });
            }
            setData({
                name: '',
                description: '',
                priority: 'Low',
                deadline: ''
            });
            onNavigateContext?.onNavigate('/list')
        } catch (error) {
            console.error('Error submitting data', error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className="flex flex-col space-y-4 w-full p-4 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}>
            <input id="id" name="id" type="hidden" defaultValue={task?.id}/>
            <div className="flex items-center space-x-4">
                <label htmlFor="name" className="w-1/3 text-left">Name</label>
                <input id="name" required name="name" value={data.name} onChange={handleChange} autoComplete="off"
                       className="border-2 border-gray-300 p-2 rounded-md w-[260px] ml-0 flex-grow focus:border-gray-300 focus:outline-none"
                       type="text" placeholder="Name"/>
            </div>
            <div className="flex items-center space-x-4">
                <label htmlFor="description" className="w-1/3 text-left">Description</label>
                <textarea id="description" name="description" value={data.description} onChange={handleChange}
                          autoComplete="off"
                          className="border-2 border-gray-300 p-2 w-[260px] ml-0 rounded-md flex-grow focus:border-gray-300 focus:outline-none"
                          placeholder="Description"/>
            </div>
            <div className="flex items-center space-x-4">
                <label htmlFor="priority" className="w-1/3 text-left">Priority</label>
                <select id="priority" name="priority" value={data.priority} onChange={handleChange}
                        className="border-2 border-gray-300 p-2 rounded-md flex-grow focus:border-gray-300 focus:outline-none w-[260px] ml-0">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="flex items-center space-x-4">
                <label htmlFor="deadline" className="w-1/3 text-left">Deadline</label>
                <input required id="deadline" name="deadline" value={data.deadline} onChange={handleChange}
                       className="border-2 border-gray-300 p-2 rounded-md flex-grow focus:border-gray-300 focus:outline-none w-[260px] ml-0"
                       type="date"/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
                    type="submit">
                {task ? 'Update' : 'Submit'}
            </button>
        </form>

    )
};
export default Edit;