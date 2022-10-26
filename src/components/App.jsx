import React from "react";

class App extends React.Component {
    state = {
        taches: [
            { id: 1, nom: "Tache 1" },
            { id: 2, nom: "Tache 2" },
            { id: 3, nom: "Tache 3" },
        ],
        compteur: 0
    };

    handleClick = () => {
        const taches = this.state.taches.slice();
        taches.push({ id: 4, nom: 'Tache 4' });
        this.setState({ taches: taches })
        // setState va permettre a react de faire un nouveau rendu, React va etre averti du chgmt d'état et faire un nouveau rendu
        this.setState({ compteur: this.state.compteur + 1 });
        console.log(this.state)
    }

    render() {
        const title = "Liste des tâches";

        // const elements = this.state.taches.map((tache) => <li key={tache.id}>{tache.nom} <button>X</button></li>)

        return (
            <div>
                <h1>{title}</h1>
                {this.state.compteur}
                <button onClick={this.handleClick}>State</button>
                <ul>
                    {this.state.taches.map(tache => (
                        <li key={tache.id}>
                            {tache.nom} <button>X</button>
                        </li>
                    ))
                    }
                </ul>
                <form action="">
                    <input type="text" placeholder="Ajouter une taches ..." />
                    <button>Confirmer</button>
                </form>
            </div >
        );
    }
}

export default App;