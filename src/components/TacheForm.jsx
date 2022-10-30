import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";
import ToolBar from "./ToolBar";

const TacheForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addTask(text))
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Ajouter une taches ..."
                />
                <button>Confirmer</button>
                <ToolBar />
            </form>
        </div>
    )



}

export default TacheForm;