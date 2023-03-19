import React, {useRef} from 'react'
import { updateSourceFile } from 'typescript';
import './styles.css';

interface Props { // Creating an interface to pass the props through the component
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void; // Function that is void, should be used onSubmit in the <form>
}

const InputField = ( { todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur(); //Question mark becuase it's optional, this also gets rid of blur when you hit 'Enter'
        }}>
        <input type='input'
        ref={inputRef}
        value = {todo}
        onChange = {
            (e)=>setTodo(e.target.value)
        }
        placeholder="Enter a task"
        className="input_box" />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField