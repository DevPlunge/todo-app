import React from 'react';

const Todo = ({ txt, todoIndex, deleteTodoHandle, updateTodoHandle }) => {

    // console.log( txt, todoIndex );

    return (
        <div className="todo-container__todo">
            <p className="todo-container__todo-text">{ txt }</p>
            <div className="todo-container__actions">
                <button className="btn" onClick={ () => { deleteTodoHandle( todoIndex ) } }>Delete</button>
                <button className="btn btn-danger" onClick={ () => { updateTodoHandle( todoIndex ) } }>Edit</button>
            </div>
        </div>
    )
}

export default Todo;
