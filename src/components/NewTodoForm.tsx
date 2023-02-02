import React from 'react';
import { useRef } from 'react';

// interface INewTodoForm {
//   value: string,
//   // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
//   onChange: React.ChangeEventHandler<HTMLInputElement>,
//   handleClick: () => void,
// }
interface INewTodoForm {
  handleClick: (text: string) => void;
}

// const NewTodoForm = ({ value, onChange, handleClick }: INewTodoForm) => {
function NewTodoForm({ handleClick }: INewTodoForm) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      {/* <input type="text" placeholder='new todo' value={value} onChange={onChange} /> */}
      <input type="text" placeholder='new todo' ref={inputRef} />
      <button onClick={onClick}>Add Todo</button>
    </>
  );
}

export default NewTodoForm;