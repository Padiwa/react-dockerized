import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";
import ToolBar from "./ToolBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
                    className="mt-2 pt-2 pb-2 rounded-l-lg"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Ajouter une taches ..."
                    required={true}
                />
                <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">

                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <ToolBar />
            </form>
        </div>
    )



}

export default TacheForm;