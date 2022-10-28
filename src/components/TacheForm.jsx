import React, { useState } from "react";
import ToolBar from "./ToolBar";

const TacheForm = ({ onTaskAdd }) => {
    const [newTache, setNewTache] = useState("");

    const handleChange = (event) => {
        // a chaque changement de l'input, le state va changer
        setNewTache(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const nom = newTache;
        const task = {
            nom,
            id: Date.now(),
            done: false,
        };
        onTaskAdd(task);
        setNewTache('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    value={newTache}
                    onChange={handleChange}
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