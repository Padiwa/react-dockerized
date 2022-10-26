import React from "react";

function Tache({ details, onDelete }) {
    // const details = this.props.details;
    // const onDelete = this.props.onDelete;
    //destructuring :
    return (
        <li key={details.id}>
            {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
        </li>
    )
}
export default Tache;