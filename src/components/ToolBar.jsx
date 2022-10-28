import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
function ThemeChoice() {

    const { theme, updateTheme } = useContext(ThemeContext);

    const handleChange = event => {
        const value = event.currentTarget.value;
        updateTheme(value);
    };

    return (
        <select name="theme" defaultValue={theme} onChange={handleChange}>
            <option value="dark">Sombre</option>
            <option value="light">Clair</option>
        </select>
    );
}
const ToolBar = () => {
    return (
        <div>
            <button>Zoomer</button>
            <button>Dezoomer</button>
            <ThemeChoice />
        </div>
    );
}

export default ToolBar;