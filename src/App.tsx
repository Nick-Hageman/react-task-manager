import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import InputField from './components/InputField';
import { Todo } from "./model"
import TodoList from './components/TodoList';

const App: React.FC = () => { //FC is a "functional component"
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault();  // Added so it doesn't refresh the page everytime

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false }])
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
      {todos.map((t) => (
        <li>{t.todo}</li>
        ))}
    </div>
  );
}

export default App;
