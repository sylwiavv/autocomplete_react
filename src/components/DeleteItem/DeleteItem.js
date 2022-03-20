import React from 'react';
import {DeleteButton, StyledDeleteIcon as DeleteIcon} from "./DeleteItems.styles";

const DeleteItem = (props) => {
    return (
        // Zastanowić się czy delete button nie zrobić jakimś globalnym divem
        <DeleteButton {...props}>
            <DeleteIcon />
        </DeleteButton>
    );
}

export default DeleteItem;