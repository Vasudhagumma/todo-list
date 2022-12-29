// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ToDo from './components/todo';
import { addToDo,getAllToDo,updateToDo,deleteToDo} from "./utiles/api";


function App() {

  const [toDo, setTodo] = useState([])
  const [text, setText] = useState("")
  const[isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect (() => {
    getAllToDo(setTodo)
  },[] )

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div  className="container">
        <h1> TO-DO LIST</h1>
        <div className='top'>
          <input type="text" placeholder='ADD ToDos.....'
           value={text}
           onChange = {(e) => setText(e.target.value)}
          />
          <div className='add' onClick={ isUpdating ? () => updateToDo  (toDoId, text, setTodo, setText, setIsUpdating): ()=> addToDo(text, setText,setTodo)}>
            {isUpdating ? "Update" : "Add"}
            </div>
        </div>
        <div className='list'>

          {
            toDo.map((item) => <ToDo key ={item._id} 
            text = {item.text}
            updateMode = {() => updateMode(item._id,item.text)} 
            deleteToDo = {() => deleteToDo(item._id,setTodo)} 
            
            />)
          }
          

          
        </div>
      </div>
    </div>
  );
}

export default App;
