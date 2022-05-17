import {useState} from "react"; 

const AddTask = ({onAdd}) =>{
    const [text, setText] = useState("")
    const [day, setDay] = useState ("")
    const onSubmit =(e) =>{ 
        e.preventDefault(); 

        if (!text){ 
            alert("Please add task")
            return 
        }
        onAdd ({text, day}) 
        setText ("")
        setDay("")

    }
    return (
        <form onSubmit ={onSubmit}>
            <h1>To-do List</h1>
            <input type = "text" value = {text} placeholder = "Add task" onChange = {(e)=>setText(e.target.value)}></input>
            <input type = "text" value = {day} placeholder = "Add day" onChange = {(e)=>setDay(e.target.value)}></input>
            <button type = "submit">Add task</button>
        </form>
    )
}

export default AddTask;