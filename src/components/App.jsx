import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import "../styles.css";
import TacheForm from './TacheForm'
import Tache from './Tache'
import { useSelector } from "react-redux";

const App = () => {
  const taches = useSelector((state) => state.todo);
  // const [taches, setTaches] = useState([]);
  const [theme, setTheme] = useState("light");

  const title = "Liste des tâches";

  const contextValue = {
    theme,
    updateTheme: setTheme
  }

  return (
    // balise fourni des info pour le theme context
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <h1>{title}</h1>
        <ul>
          {taches.map(tache => (
            <Tache key={tache.id} details={tache} />
          ))
          }
        </ul>
        <TacheForm />
      </div >
    </ThemeContext.Provider>


  );
}

export default App;