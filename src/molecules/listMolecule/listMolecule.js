import React from "react";
import ListComponent from "../../atoms/list/listComponent";
import ButtonComponent from "../../atoms/button/buttonComponent";
import { Wrap } from "./listMolecule.styles";

const ListMolecule = ({ info, deleteTask, key }) => {
    return <Wrap>
        <ListComponent info={info} />
        <ButtonComponent
            iconType="faTrash"
            actionMethod={(event) => deleteTask(event, key)}
        />
    </Wrap>
}

export default ListMolecule;