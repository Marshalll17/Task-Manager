import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App=()=>{
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
        {
            id:1,
            text:'da',
            day:'4 july',
            reminder:true,
        },
        {
            id:2,
            text:'da',
            day:'24 july',
            reminder:true,
    
        },
        {
            id:3,
            text:'da',
            day:'14 july',
            reminder:false,
        }
    ])




    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000) +1

      const newTask = {id,...task}
      setTasks([...tasks,newTask])
    }


    const deleteTask =(id)=>{

      setTasks(tasks.filter((task) => task.id !==id))
    }

    const toggleReminder = (id) =>{
      setTasks(tasks.map((task)=>task.id==id?{...task,reminder:!task.reminder}:task))
    }



    



  return (
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask &&<AddTask onAdd={addTask}/>}
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete=
     {deleteTask} onToggle={toggleReminder} />:'NO Tasks to show'}
     
    </div>
  );
}

export default App;
