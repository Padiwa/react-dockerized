import React from "react";

const Tache = ({ details, onDelete, onDone }) => {
    const tacheDone = details.done ? 'done' : 'none';
    return (
        <li className={tacheDone} key={details.id} >
            {details.nom} < button onClick={() => onDelete(details.id)}> X</button > <button onClick={() => onDone(details.id)}>-</button>
        </li >
    )

}
export default Tache;