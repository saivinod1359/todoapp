import React, { useState } from "react";
import InputComponent from "../../atoms/input/inputComponent";
import ButtonComponent from "../../atoms/button/buttonComponent";
import HeadingComponent from "../../atoms/heading/headingComponent";

import "./createTaskComponent.css";

const CreateTaskComponent = ({updateTodoList}) => {
    const [newTask, setNewTask] = useState("");

    const addNewTask = () => {
        console.log("Add New Task");
        updateTodoList(newTask)
    }

    const updateNewTask = (task) => {
        console.log('task: ', task)
        setNewTask(task)
    }

    return <React.Fragment>
        <HeadingComponent
            type="h3"
            msg="Create Task"
        />
        <div className="block">
            <InputComponent updateNewTask={updateNewTask}/>
            <ButtonComponent
                iconType="plus"
                actionMethod={ addNewTask }
            />
        </div>
    </React.Fragment>
}

export default CreateTaskComponent;