import React from "react";
import Tache from "./Tache";
import TacheForm from "./TacheForm";
class App extends React.Component {
    // variable qui fait référence à un élément du DOM

    state = {
        taches: [
            { id: 1, nom: "Tache 1" },
            { id: 2, nom: "Tache 2" },
            { id: 3, nom: "Tache 3" },
        ],
        newTache: ''
    };

    // fonction fléchée permet de parler avec le bon this, d'avoir le state
    handleDelete = id => {
        const taches = [...this.state.taches];
        const index = taches.findIndex((tache) => tache.id === id)
        taches.splice(index, 1);
        this.setState({ taches })
    }

    handleAdd = tache => {
        const taches = [...this.state.taches];
        taches.push(tache);
        this.setState({ taches })

    }

    render() {
        const title = "Liste des tâches";

        // const elements = this.state.taches.map((tache) => <li key={tache.id}>{tache.nom} <button>X</button></li>)

        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.taches.map(tache => (
                        <Tache
                            details={tache}
                            onDelete={this.handleDelete}
                        />
                    ))
                    }
                </ul>
                <TacheForm
                    onTaskAdd={this.handleAdd}
                />
            </div >
        );
    }
}

export default App;