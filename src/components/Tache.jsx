import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./redux";

const Tache = ({ details }) => {
    const dispatch = useDispatch()
    const tacheDone = details.done ? 'done' : 'none';
    return (
        <li className={tacheDone} key={details.id} >
            {details.text} <button onClick={() => dispatch(toggleTask(details.id))}>--</button > <button onClick={() => dispatch(deleteTask(details.id))}>X</button>
        </li >
    )

}
export default Tache;
// before
// {details.text} < button onClick={() => onDelete(dispatch({ type: "todo/deleteTask", payload: details.id }))}> X</button > <button onClick={dispatch({ type: "todo/toggleTask", payload: details.id })}>-</button>
//after
// {details.text} < button onClick={() => onDelete(dispatch(toggleTask(details.id)))}> X</button > <button onClick={dispatch(deleteTask(details.id))}>-</button>
