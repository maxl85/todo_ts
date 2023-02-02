import React from 'react';
import { ITodo } from '../types';
import TodoItem from './TodoItem';


interface ITodoList {
  list: ITodo[],
  toggleTodo: (id: ITodo['id']) => void,
  removeTodo: (id: ITodo['id']) => void,
}

const TodoList = ({ list, removeTodo, toggleTodo }: ITodoList) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList;