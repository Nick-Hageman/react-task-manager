import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import InputField from './components/InputField';

const App: React.FC = () => { //FC is a "functional component"
  const [todo, setTodo] = useState<string>("");

  //console.log(todo);
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
