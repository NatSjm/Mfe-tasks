import { useTransition } from "react";
import {Checkbox} from "@/components/ui/checkbox";
import * as React from "react";
 import updateCompleted from "@/actions/updateCompleted";

type Props = {
    id: number;
    completed: boolean;
    getCountries: () => void;
};

export const CompletedCheckbox: React.FC<Props> = ({ id, completed, getCountries }) => {
    const [isPending, startTransition] = useTransition();

    const handleChangeCompletedTask = (value: boolean) => {
        if(isPending || !id) return;
        startTransition(async () => {
            await updateCompleted(id, value);
            getCountries()
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
