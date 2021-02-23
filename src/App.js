import React from 'react';
import './App.css';
// import TodoForm from './Component/TodoForm';



import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="todo-app">
     {/* <TodoForm />  */}
     <TodoList />
    </div>
  );
}

export default App;
