/**
 * Button Component is an Atom which will reuse
 * 
 * Props:
 * @iconType
 * @actionMethod
 */

import React from "react";
import { NormalButton } from "./button.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const ButtonComponent = ({ iconType, actionMethod }) => {
    // const buttonStyle = { color: "white", backgroundColor: "blue" };

    const clickEventHandler = (event) => {
        actionMethod(event);
    }

    // return <button onClick={clickEventHandler} style={{ color: "white", backgroundColor: "blue" }}> //inline style
    // return <button onClick={clickEventHandler} className={styles.btnClass}> //Module Styles
    return <NormalButton onClick={clickEventHandler} className={iconType === "plus" ? "plus" : "trash"}>
        <FontAwesomeIcon
            icon={iconType === "plus" ? faPlus : faTrash}
        />
    </NormalButton>
    // <button onClick={clickEventHandler}>
    //     <FontAwesomeIcon
    //         icon={iconType === "plus" ? faPlus : faTrash}
    //     />
    //     <span className={styles.error}>Button</span>
    // </button>
    // return <BootStrapButton> Button</BootStrapButton>
}

export default ButtonComponent;