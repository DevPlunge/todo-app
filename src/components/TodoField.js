import React from 'react';
import { v4 } from 'uuid';

const TodoField = ({ todo, changeTodo, addTodo }) => {

    const addTodoInit = e => {
        e.preventDefault(); 
        // structure a todo
        const id = v4();
        const todoObj = {
            id,
            txt: todo
        }
        addTodo( todoObj );
    }

    const changeTodoInit = e => {
        changeTodo( e.target.value );
    }


    return (
        <form className="todo-container__form" onSubmit={ addTodoInit }>
            <input 
                className="todo-container__field"
                type="text" 
                placeholder="Enter a todo..."
                value={ todo }
                onChange={ changeTodoInit }
            />
            <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default TodoField;
