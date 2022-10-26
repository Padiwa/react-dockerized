import React, { Component } from "react";

class TacheForm extends Component {
    state = {
        newTache: ''
    };

    handleChange = (event) => {
        // a chaque changement de l'input, le state va changer
        this.setState({ newTache: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const id = new Date().getTime();
        const nom = this.state.newTache;
        this.props.onTaskAdd({ id, nom });
        this.setState({ newTache: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input
                        value={this.state.newTache}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Ajouter une taches ..."
                    />
                    <button>Confirmer</button>
                </form>
            </div>
        )

    }

}

export default TacheForm;