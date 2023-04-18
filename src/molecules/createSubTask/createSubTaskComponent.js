import React from "react";
import InputComponent from "../../atoms/input/inputComponent";
import ButtonComponent from "../../atoms/button/buttonComponent";
import HeadingComponent from "../../atoms/heading/headingComponent";

import "./createSubTaskComponent.css";

const CreateSubTaskComponent = () => {

    const addNewSubTask = () => {
        console.log("Add New Sub Task");
    }


    return <React.Fragment>
        <HeadingComponent
            type="h3"
            msg="Create Sub Task"
        />
        <div className="block">
            <InputComponent />
            <ButtonComponent
                iconType="plus"
                actionMethod={ addNewSubTask }
            />
        </div>
    </React.Fragment>
}

export default CreateSubTaskComponent;