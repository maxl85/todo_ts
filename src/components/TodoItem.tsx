import React from 'react';
import { ITodo } from '../types';


interface ITodoItem extends ITodo {
  toggleTodo: (id: ITodo['id']) => void,
  removeTodo: (id: ITodo['id']) => void,
}

const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }: ITodoItem) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;