import Edit from "../components/edit.tsx";
import Update from "../components/update.tsx";
import {useEffect, useState} from "react";

const EditTask = () => {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
         const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        setId(id);
    }, [window.location.search]);



    if(!id) return <Edit/>
    return (
        <Update id={id} />
    );
};

export default EditTask;