import styled from "styled-components";

export const NormalButton = styled.button`
    background-color: #F64C72;
    color: white;
    border: none;
    padding: 6px 15px;

    &.plus {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-weight: bold
    }

    &.trash {
        border-radius: 6px;
        font-weight: bold;
        padding: 10px
    }
`