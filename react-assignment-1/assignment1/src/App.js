import React, { useState } from 'react';
import InputForm from './InputForm';
import ListItem from './ListItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text
    };
    setTodos([...todos, newTodo]);
  }

  const todoItems = todos.map(todo => (
    <ListItem key={todo.id} text={todo.text} />
  ));

  return (
    <div className='container'>
      <InputForm onSubmit={addTodo} />
      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
