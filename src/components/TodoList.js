import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {

    const deleteTodoInit = ( todoIndex ) => {
        deleteTodo( todoIndex );
    }

    const updateTodoInit = ( todoIndex ) => {
        console.log( todoIndex );
        updateTodo( todoIndex );
    }

    return (
        <div className="todo-container__list">
            
            { ( !todos || todos.length === 0 ) && <p className="todo-container__no-list">No todos yet!</p> }

            { todos.map(( todo, index ) => <Todo 
                key={ todo.id }
                txt={ todo.txt }
                todoIndex={ index }
                deleteTodoHandle={ deleteTodoInit }
                updateTodoHandle={ updateTodoInit }
            /> ) }

        </div>
    )
}

export default TodoList;
