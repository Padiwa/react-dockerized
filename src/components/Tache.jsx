import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { editTask } from "./redux";

import { deleteTask, toggleTask } from "./redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faArrowRotateLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
const Tache = ({ details }) => {
    const [inputClass, setinputClass] = useState("mt-2 pt-2 pb-2 rounded-l-lg hidden");
    const [clicked, setCliked] = useState(false);

    const dispatch = useDispatch()
    const tacheDone = details.done ? 'done' : '';
    const statusIcon = details.done ? faArrowRotateLeft : faCheck;
    const statusIconColor = details.done ? "#eb8a37" : "green";
    const [text, setText] = useState(details.text);

    const createdAt = new Date(details.id);

    const handleClick = () => {
        setCliked(!clicked)
        setinputClass("")
        console.log(clicked)
        console.log(inputClass)
    }
    const validateEdit = () => {
        setinputClass("hidden")

        dispatch(editTask({id:details.id,text:text}));

    }
    return (
        <li key={details.id}  >
            <div className="p-2 border-b flex items-center justify-around">
                <span className={tacheDone + " createdAt"}>{createdAt.toLocaleString()}</span>
                <div className="taskText">
                    <span className={tacheDone + " taskText m-2 w-48 px-4 task"}>
                    {details.text}
                    </span>
                    <div className={inputClass}>
                        <input
                            className="mt-2 pt-2 pb-2 borde"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            required={true}
                        />
                        <FontAwesomeIcon
                            color="green"
                            className="fa-2xl mr-4"
                            size="xs"
                            icon={faCheck}
                            onClick={() => validateEdit()}
                        />
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon
                            color="#ecc659"
                            className="fa-2xl mr-4"
                            icon={faEdit}
                            onClick={() => handleClick()}
                    />
                </div>             
                <div>
                    <FontAwesomeIcon
                        color="#d32626"
                        className="fa-2xl mr-4"
                        icon={faTrash}
                        onClick={() => dispatch(deleteTask(details.id))}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={statusIcon}
                        className="fa-2xl"
                        color={statusIconColor}
                        onClick={() => dispatch(toggleTask(details.id))}
                    />
                </div>
            </div>

        </li >
    )

}
export default Tache;
// before
// {details.text} < button onClick={() => onDelete(dispatch({ type: "todo/deleteTask", payload: details.id }))}> X</button > <button onClick={dispatch({ type: "todo/toggleTask", payload: details.id })}>-</button>
//after
// {details.text} < button onClick={() => onDelete(dispatch(toggleTask(details.id)))}> X</button > <button onClick={dispatch(deleteTask(details.id))}>-</button>
