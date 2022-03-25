import React from 'react';
import {DeleteButton, StyledDeleteIcon as DeleteIcon} from "./DeleteItems.styles";

const DeleteItem = (props) => {
    return (
        <DeleteButton {...props}>
            <DeleteIcon />
        </DeleteButton>
    );
}

export default DeleteItem;