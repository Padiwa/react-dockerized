import React, { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import "../styles.css";
import ToolBar from "./ToolBar";


function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light");
  const contextValue = {
    theme,
    updateTheme: setTheme
  }
  return (
    // balise fourni des info pour le theme context
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <ToolBar />
        <p>Theme utilisé : {theme}</p>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;