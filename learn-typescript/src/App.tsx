import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <TodoCreate/>
      <TodoList/>
      <Counter/>

    </div>
  );
}

export default App;
