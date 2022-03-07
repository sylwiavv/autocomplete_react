import React, {useState} from "react";
import {ReactComponent as DeleteIcon} from 'assets/icons/icon__close.svg';
import {DeleteButton} from "./ToDoRemove.styles";

const ToDoRemove = ({ todos, index, setTodos }) => {

    const removeToDo = index => {
        const newToDos = [ ...todos];
        newToDos.splice(index, 1);
        setTodos(newToDos);
    }

    return (
        <DeleteButton onClick={() => removeToDo(index)}>
            <DeleteIcon />
        </DeleteButton>
    );
}

export default ToDoRemove;