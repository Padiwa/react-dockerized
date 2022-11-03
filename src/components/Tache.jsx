import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
const Tache = ({ details }) => {
    const dispatch = useDispatch()
    const tacheDone = details.done ? 'done' : '';
    const statusIcon = details.done ? faArrowRotateLeft : faCheck;
    const statusIconColor = details.done ? "#eb8a37" : "green";
    const createdAt = new Date(details.id);
    console.log(createdAt);
    return (
        <li key={details.id}  >
            <div className="p-2 border-b flex items-center justify-around">
                <span className={tacheDone + " createdAt"}>{createdAt.toLocaleString()}</span>
                <div className="taskText">
                    <span className={tacheDone + " taskText m-2 w-48 px-4 task"}>
                        {details.text}
                    </span>
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
