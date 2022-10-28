import React, { useState } from "react";
import Tache from "./Tache";
import TacheForm from "./TacheForm";
const App = () => {
    const [taches, setNewTaches ]= useState([]);
    // variable qui fait référence à un élément du DOM

    // fonction fléchée permet de parler avec le bon this, d'avoir le state
    const handleDelete = id => {
        const updatedTaches = [...taches];
        const index = updatedTaches.findIndex(tache => tache.id === id)
        updatedTaches.splice(index, 1);
        setNewTaches(updatedTaches)
    }

    const handleAdd = tache => {
        const updatedTaches = [...taches];
        updatedTaches.push(tache);
        setNewTaches(updatedTaches)

    }

    const title = "Liste des tâches";

    // const elements = this.state.taches.map((tache) => <li key={tache.id}>{tache.nom} <button>X</button></li>)

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {taches.map(tache => (
                    <Tache
                        key={tache.id}
                        details={tache}
                        onDelete={handleDelete}
                    />
                ))
                }
            </ul>
            <TacheForm
                onTaskAdd={handleAdd}
            />
        </div >
    );
}
export default App;