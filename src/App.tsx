import React, { useState } from 'react';
import './App.css';
import NewTotoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './types';


function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: ITodo[]) => {
        setTodos(data);
      });
  };

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };
  
  const toggleTodo = (id: ITodo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      
      return {
        ...todo,
        completed: !todo.completed,
      };
    }));
  };
  
  const removeTodo = (id: ITodo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <button onClick={loadTodos}>Load todos</button>
      <NewTotoForm handleClick={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
