import React from "react";

class App extends React.Component {
    state = {
        clients: [
            { id: 1, nom: "Tache 1" },
            { id: 2, nom: "Tache 2" },
            { id: 3, nom: "Tache 3" },
        ]
    }
    render() {
        const title = "Liste des tâches";
        const element = <li>Test Variable</li>

        const elements = this.state.clients.map(function (client) {
            return <li key={client.id}>{client.nom} <button>X</button></li>
        })

        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {elements}
                </ul>
                <form action="">
                    <input type="text" placeholder="Ajouter une taches ..." />
                    <button>Confirmer</button>
                </form>
            </div>
        );
    }
}

export default App;