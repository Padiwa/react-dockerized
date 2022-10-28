import React from "react"
// besoin du theme et de la fonction pour l'update
export default React.createContext({
    theme : '',
    updateTheme: name => {}
});