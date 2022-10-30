import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
const Tache = ({ details }) => {
    const dispatch = useDispatch()
    const tacheDone = details.done ? 'done' : '';
    const statusIcon = details.done ? faArrowRotateLeft : faCheck;
    return (
        <li key={details.id} >
            <div className={tacheDone + " m-2 text-xl w-48 drop-shadow-lg inline-block px-4"}>
                {details.text}
            </div>
            <FontAwesomeIcon
                icon={faTrash}
                onClick={() => dispatch(deleteTask(details.id))}
            />            <FontAwesomeIcon
                icon={statusIcon}
                onClick={() => dispatch(toggleTask(details.id))}
            />
        </li >
    )

}
export default Tache;
// before
// {details.text} < button onClick={() => onDelete(dispatch({ type: "todo/deleteTask", payload: details.id }))}> X</button > <button onClick={dispatch({ type: "todo/toggleTask", payload: details.id })}>-</button>
//after
// {details.text} < button onClick={() => onDelete(dispatch(toggleTask(details.id)))}> X</button > <button onClick={dispatch(deleteTask(details.id))}>-</button>
