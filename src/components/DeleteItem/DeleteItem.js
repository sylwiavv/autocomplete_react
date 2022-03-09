import React, {useState, useEffect} from 'react';
import {DeleteButton} from "./DeleteItems.styles";
import {ReactComponent as DeleteIcon} from 'assets/icons/icon__close.svg';

const DeleteItem = (props) => {
    return (
        // Zastanowić się czy delete button nie zrobić jakimś globalnym divem
        <DeleteButton {...props}>
            <DeleteIcon/>
        </DeleteButton>
    );
}

export default DeleteItem;