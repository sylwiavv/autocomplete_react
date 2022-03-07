import React, { useState } from 'react';
import { InputAutoComplete } from "../InputAutoComplete/InputAutoComplete.styles";

const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = React.useState("");

    const handleOnSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addToDo(value);
        setValue("");
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <InputAutoComplete
                    id="input-todo"
                    type="text"
                    placeholder="Add your todo"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                >
                </InputAutoComplete>
            </form>
        </>
    );
}

export default ToDoForm;