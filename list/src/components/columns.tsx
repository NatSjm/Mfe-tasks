"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ArrowUpDown, MoreHorizontal} from "lucide-react"
import DeleteTaskMenuItem from "@/components/DeleteTaskMenuItem";
import {Dialog} from "@/components/ui/dialog";
import CompletedCheckbox from "@/components/CompletedCheckbox";


export interface Task {
    id?: number;
    name: string;
    description: string;
    deadline: string;
    priority: string;
    completed: boolean;
}


export const getColumns: ColumnDef<Task>[] = (getTasks, navigate) => {

    return [
    {
        id: "completed",
        header: () => <div className="text-left">Completed</div>,
        cell: ({row}) => (
            <CompletedCheckbox
                id={row.original.id!}
                completed={row.original.completed}
                getTasks={getTasks}
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "priority",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Priority
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        sortingFn: (rowA, rowB) => {
            const priorities = ['High', 'Medium', 'Low'];
            const valueA = priorities.indexOf(rowA.getValue("priority"));
            const valueB = priorities.indexOf(rowB.getValue("priority"));
            return valueA - valueB;
        },
        cell: ({row}) => <div className="px-4">{row.getValue("priority")}</div>
    },
    {
        accessorKey: "deadline",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Deadline
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="px-4">{row.getValue("deadline")}</div>
    },
    {
        id: "actions",
        cell: ({row}) => {
            const task = row.original

            return (
                <Dialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={()=>{ navigate?.(`/editor/?id=${task.id}`)}}>Edit</DropdownMenuItem>
                            <DeleteTaskMenuItem getTasks={getTasks} id={task.id!}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Dialog>
            )
        },
    },
]};
