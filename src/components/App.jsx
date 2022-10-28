import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import "../styles.css";
import TacheForm from './TacheForm'
import Tache from './Tache'

const App = () => {

  const [taches, setNewTaches] = useState([]);
  const [theme, setTheme] = useState("light");

  const title = "Liste des tâches";

  const contextValue = {
    theme,
    updateTheme: setTheme
  }
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

  return (
    // balise fourni des info pour le theme context
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
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
    </ThemeContext.Provider>

  );
}

export default App;