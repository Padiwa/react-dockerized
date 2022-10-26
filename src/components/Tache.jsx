import React, { Component } from "react";

class Tache extends Component {
    render() {
        // const details = this.props.details;
        // const onDelete = this.props.onDelete;
        //destructuring :
        const { details, onDelete } = this.props;
        return (
            <li key={details.id}>
                {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
            </li>
        )
    }
}
export default Tache;