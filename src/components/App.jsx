import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import "../styles.css";
import TacheForm from './TacheForm'
import TacheList from "./TacheList";
const App = () => {
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
        <h1 className="text-3xl font-bold mt-2 p-3">{title}</h1>
        <TacheList />
        <TacheForm />
      </div >
    </ThemeContext.Provider>


  );
}

export default App;