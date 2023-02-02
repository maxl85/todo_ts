import { useRef } from 'react';

interface INewTodoForm {
  handleClick: (text: string) => void;
}

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
      <input type="text" placeholder='new todo' ref={inputRef} />
      <button onClick={onClick}>Add Todo</button>
    </>
  );
}

export default NewTodoForm;