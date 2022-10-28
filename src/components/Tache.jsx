import React from "react";

const Tache = ({ details, onDelete }) => (
    <li key={details.id}>
        {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
    </li>
);
export default Tache;