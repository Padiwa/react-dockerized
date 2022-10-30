import React from "react";
import { useSelector } from "react-redux";
import Tache from "./Tache";
const TacheList = () => {
    const taches = useSelector((state) => state.todo);

    return (
        <ul className="m-6">
            {taches.map(tache => (
                <Tache key={tache.id} details={tache} />
            ))
            }
        </ul>
    )

}
export default TacheList;
