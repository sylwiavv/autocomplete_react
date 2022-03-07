import React, { useState } from 'react';
import {Wrapper} from "../ResultList/ResultList.styles";
import {WrapperLi} from "../ResultListItem/ResultListItem.styles";
import {Title} from "../Title/Title.styles";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoRemove from "../ToDoRemove/ToDoRemove";

const ToDo = () => {
    const [todos, setTodos] = React.useState([]);

    const addToDo = text => {
        const newToDos = [ ...todos, { text }];
        setTodos(newToDos);
    }

    return (
        <>
            <Title>ToDo list</Title>
            <ToDoForm addToDo={addToDo} />
            <Wrapper className="list-todo">
                {todos.map((todo, index) => (
                    <WrapperLi
                        className="item-todo"
                        key={todo.text}
                        index={index}
                    >
                        {todo.text}
                        <ToDoRemove todos={todos} index={index} setTodos={setTodos}/>
                    </WrapperLi>
                ))}
            </Wrapper>
        </>
    );
}

export default ToDo;