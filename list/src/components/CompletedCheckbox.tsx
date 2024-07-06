import { useTransition } from "react";
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";
 import updateCompleted from "@/actions/updateCompleted";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
    id: number;
    completed: boolean;
    getTasks: () => void;
};

export const CompletedCheckbox: React.FC<Props> = ({ id, completed, getTasks }) => {
    const [isPending, startTransition] = useTransition();
    const { showBoundary } = useErrorBoundary();
    const handleChangeCompletedTask = (value: boolean) => {
        if(isPending || !id) return;
        startTransition(async () => {
            await updateCompleted(id, value, showBoundary);
            getTasks()
        });
    };

    return (
        <Checkbox
            checked={completed}
            onCheckedChange={handleChangeCompletedTask}
            aria-label="Complete"
        />

    );
};

export default CompletedCheckbox;
