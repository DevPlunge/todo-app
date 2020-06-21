import React, { useState } from 'react';
import './App.scss';

import Wrap from './components/Wrap';
import TodoContainer from './components/TodoContainer';


const App = () => {

  // state
  const [ todos, setTodos ] = useState([]);
  const [ currentTodo, setCurrentTodo ] = useState('');

  // handle todo input
  const changeTodoHandler = ( todo ) => {
    // console.log(todo);
    setCurrentTodo( todo );
  };

  // add todo
  const addTodoHandler = ( todo ) => {
    todos.push( todo );
    setTodos( todos );
    setCurrentTodo('');
  };

  // delete todo
  const deleteTodoHandler = ( todoIndex ) => {
    console.log('Delete todo at:', todoIndex);
    const filteredTodos = todos.filter(( todo, index ) => {
      return index !== todoIndex;
    });
    // console.log( filteredTodos ); 
    setTodos( filteredTodos ); 
  };
  
  // update todo
  const updateTodoHandler = ( todoIndex ) => {
    // console.log(todoIndex);
    const matchedTodo = todos.find(( todo, index ) => index === todoIndex);
    setCurrentTodo( matchedTodo.txt );
    deleteTodoHandler( todoIndex );
  };


  return (
      <div className="container">
        <Wrap>
          <TodoContainer 
            todos={ todos }
            currentTodo={ currentTodo }
            changeTodoHandler={ changeTodoHandler }
            addTodoHandler={ addTodoHandler }
            deleteTodoHandler={ deleteTodoHandler }
            updateTodoHandler={ updateTodoHandler }
          />
        </Wrap>
      </div>
  );
}

export default App;
