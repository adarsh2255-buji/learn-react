import React, { useState } from 'react'

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, SetTodos] = useState([])

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }
    const handleTodos = () => {
        if(newTodo.trim() === "") return
        const addTodo = {
            id : Date.now(),
            text : newTodo,
            completed : false
        }
        SetTodos([...todos, addTodo])
        setNewTodo('')
    }
    const toggleTodo = (id) =>{
        const updated = todos.map((todo) => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
        SetTodos(updated)
    } 
    const removeTask = (id) => {
        const updatedTodo = todos.filter((todo) => (
            todo.id !== id
        ))
        SetTodos(updatedTodo)
    }
  return (
    <div>
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button onClick={handleTodos}>Add todo</button>
        <p>Todo List</p>
        {
            todos.length > 0 ? (
                       <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}
                    style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todos ? todo.text : "no todos"}{todo.completed? "✔️" : ""}
                    <span><button onClick={()=> toggleTodo(todo.id)}>Complete</button></span>
                    <span><button onClick={() => removeTask(todo.id)}>delete</button></span>
                    
                    </li>
                ))
            }
        </ul>
            ) : (<p>No todos found</p>)
        }
 
    </div>
  )
}

export default Todo