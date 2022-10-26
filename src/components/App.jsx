import React from "react";

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
        const taches = this.state.taches.slice();
        const index = taches.findIndex((tache) => tache.id === id)
        taches.splice(index, 1);
        this.setState({ taches: taches })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime();
        const nom = this.state.newTache;
        const tache = { id: id, nom: nom };

        const taches = this.state.taches.slice();
        taches.push(tache);
        this.setState({ taches: taches, newTache: '' })

    }

    handleChange = (event) => {
        // a chaque changement de l'input, le state va changer
        const value = event.currentTarget.value;
        this.setState({ newTache: value })
        console.log(event.currentTarget.value)
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
                    <input value={this.state.newTache} onChange={this.handleChange} type="text" placeholder="Ajouter une taches ..." />
                    <button>Confirmer</button>
                </form>
            </div >
        );
    }
}

export default App;