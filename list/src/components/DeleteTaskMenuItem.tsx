"use client";

import deleteTodo from "@/actions/deleteTodo";
import {useTransition} from "react";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

type Props = {
    id: number;
    getCountries: () => void;
};

export const DeleteTaskMenuItem: React.FC<Props> = ({id, getCountries}) => {
    const [isPending, startTransition] = useTransition();

    const handleDeleteTask = () => {
        if (isPending) return;
        startTransition(async () => {
            await deleteTodo(id);
            getCountries();
        });

    };

    return (
        <DropdownMenuItem
            onClick={handleDeleteTask}
        >Delete</DropdownMenuItem>

    );
};

export default DeleteTaskMenuItem;
