import React from 'react';

import Heading from './Heading';
import TodoField from './TodoField';
import TodoList from './TodoList';

const TodoContainer = ({ todos, currentTodo, changeTodoHandler, addTodoHandler, deleteTodoHandler, updateTodoHandler }) => {
    return (
        <div className="todo-container">
            <Heading label="Todo Application" size="1" center="true" />
            <TodoField 
                todo={ currentTodo }
                changeTodo={ changeTodoHandler }
                addTodo={ addTodoHandler }
            />
            <TodoList 
                todos={ todos }    
                deleteTodo={ deleteTodoHandler }
                updateTodo={ updateTodoHandler }
            />
        </div>
    )
}

export default TodoContainer;