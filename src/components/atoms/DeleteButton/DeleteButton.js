import React from 'react';
import { ButtonWrapper, StyledDeleteIcon as DeleteIcon } from "./DeleteItems.styles";

const DeleteButton = (props) => {
    return (
        <ButtonWrapper {...props}>
            <DeleteIcon />
        </ButtonWrapper>
    );
}

export default DeleteButton;