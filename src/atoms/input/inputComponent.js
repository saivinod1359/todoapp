import React from "react";
import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #cfcfcf;
    width: 100%;
    padding: 6px;
    font-size: 16px
`

const InputComponent = ({updateNewTask}) => {

    const changeEventHandler = (event) => {
            updateNewTask(event.target.value);
    }

    const blurEventHandler = (event) => {
        event.target.value = ""
    }

    return <Input
        onKeyUp={changeEventHandler}
        onBlur={blurEventHandler}
        type="text"
        name="input"
    />
}

export default InputComponent;