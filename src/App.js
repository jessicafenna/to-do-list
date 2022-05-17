import {useState} from "react";
// // import ReactDOM from 'react-dom/client';
import './App.css';
// ask about function version 
import AddTask from "./components/addtask";
function App  () {

  const [tasks, setTasks] = useState ([
    {
      text: "Text",
      day: "Day",
      // completed: false,
  }
]);
// props can be called anything
  const addToDo = (task) => { 
    // this will list out all new tasks 
    const newTask = { 
      ...task   
    }
    
    // this copies out the old tasks 
    setTasks ([...tasks,newTask])
    
  }

  // use a splice to delete a specific task
  const deleteTask =(index) =>
  {
    let newTask = [...tasks];
    newTask.splice(index,1)
    setTasks(newTask);
  }

// // this doesn't work - expresion
//   let taskList = [...tasks];
//   if (taskList[index].completed ===false){
//     taskList[index].completed === true
//     setTasks();
//   }
//   else {
//     taskList[index].completed ===false
//     setTasks();

//   }
  // checkbox - using input tag 
  let ToggleComplete = (index) => {
     let taskList = tasks.map(tasks =>{
      if (tasks.index ===index){
      tasks.completed = !tasks.completed
      }
      return tasks
     })
     setTasks(taskList);
     
    }
  
      
   

  return(
    <div className = "wholePage">
    {/* this is calling the form submission from add tasks */}
        <div className="input">
          <AddTask onAdd={addToDo}></AddTask>
        </div>
       
    {/* this is mapping out everything on your array list */}
          {tasks.map((data, index) => (
            <div className="bigBox">
              <div className="container">              
                     <div className="wrapper">
                      <input type = "checkbox" onChange ={()=>ToggleComplete(index)}  ></input>
                  </div>
                  <div className="wrapper2">
                      <p className = {tasks.completed ? "todostrike" : "todo"} key ={index} >{data.text} <br/>Due by:{data.day}</p>
                  </div>
               
                    <div className="wrapper">
                      <button key ={index} onClick = {()=>deleteTask(index)}>Delete</button>
                  </div>
              </div>
              </div>
          ))}
          
   </div>
  );
}
// checked ={tasks.completed}
//  - originally this was in p before checkbox - not needed 
export default App;
