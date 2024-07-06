"use client";

import deleteTodo from "@/actions/deleteTodo";
import {useTransition} from "react";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
    id: number;
    getTasks: () => void;
};

export const DeleteTaskMenuItem: React.FC<Props> = ({id, getTasks}) => {
    const [isPending, startTransition] = useTransition();
    const { showBoundary } = useErrorBoundary();

    const handleDeleteTask = () => {
        if (isPending) return;
        startTransition(async () => {
            await deleteTodo(id, showBoundary);
            getTasks();
        });

    };

    return (
        <DropdownMenuItem
            onClick={handleDeleteTask}
        >Delete</DropdownMenuItem>

    );
};

export default DeleteTaskMenuItem;
