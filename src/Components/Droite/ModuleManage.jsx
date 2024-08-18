import React from "react";
import { Historique } from "../Historique/Historique";
import Formulaire from "../Formulaire/Formulaire";

const ModuleManage = () => {
    return (
        <div>
            <h1>Manage</h1>
            <Formulaire/>
            <Historique></Historique>
        </div>
    )

}

export default ModuleManage;