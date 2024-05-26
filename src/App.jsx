import TodoHead from './components/todo-head'
import TodoAdder from './components/todo-adder';
import TodoList from './components/todo-list';
import './App.css'
import { useState } from 'react';

function App() {
  // let taskArr = [{
  //   task: "Get Eggs",
  //   date: "07/05/2024"
  // },
  // {
  //   task: "Go Gym",
  //   date: "08/05/2024"
  // },
  // {
  //   task: "Submit anish nda fee",
  //   date: "04/06/2024"
  // }];

  const [taskArr , setTaskArr] = useState([]);

  const [newTask , setNewTask] = useState({task:'' , data:''});

  let handleButton = () => {
      if(newTask.task && newTask.date) {
        setTaskArr([...taskArr , newTask]);
      }
  }

  let deleteTask = (index) => {
    const newTaskArr = taskArr.filter((_,i) => i!== index);
    setTaskArr(newTaskArr);
  }



  return (
    <>
      <TodoHead val = {taskArr}></TodoHead>
      <TodoAdder handleButton={handleButton}val = {newTask} setVal = {setNewTask}></TodoAdder>
      <TodoList taskArr = {taskArr} deleteEntry={deleteTask}></TodoList>
      
    </>
  );
   
}

export default App
