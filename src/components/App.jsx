import React from "react";

class App extends React.Component {
    // variable qui fait référence à un élément du DOM
    clientInput = React.createRef();

    state = {
        taches: [
            { id: 1, nom: "Tache 1" },
            { id: 2, nom: "Tache 2" },
            { id: 3, nom: "Tache 3" },
        ]
    };

    // fonction fléchée permet de parler avec le bon this, d'avoir le state
    handleDelete = id => {
        const taches = this.state.taches.slice();
        const index = taches.findIndex((tache) => tache.id === id)
        taches.splice(index, 1);
        this.setState({ taches: taches })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // les dev react aime pas les ref
        console.log(this.clientInput.current.value)
    }

    render() {
        const title = "Liste des tâches";

        // const elements = this.state.taches.map((tache) => <li key={tache.id}>{tache.nom} <button>X</button></li>)

        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.taches.map(tache => (
                        <li key={tache.id}>
                            {tache.nom} <button onClick={() => this.handleDelete(tache.id)}>X</button>
                        </li>
                    ))
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.clientInput} type="text" placeholder="Ajouter une taches ..." />
                    <button>Confirmer</button>
                </form>
            </div >
        );
    }
}

export default App;