import React, { useState } from 'react'
import { useTodos } from '../../../hooks/use-todo'
import './style.css'

const TodoList = () => {
   const [text, setText] = useState('')

   const { todos, createTodo, deleteTodo} = useTodos()
   const onCreate = () => {
       createTodo(text)
       setText('')
   }

  return (
    <div className='allStyle'>
        <div className='todoList'>
            <div className='inputEnter'>
                <input type="text"
                placeholder='Enter Task'
                value={text} 
                onChange={e => setText(e.target.value)} />
                <button onClick={onCreate} className='addBtn'>Add</button>
            </div>
            <ul className='listTodo'>
                {todos.map(todo => (
                    <li key={todo.id} className='list'>
                        {todo.title}
                        <input className='checkboxInp' type="checkbox" value={todo.isCompleted} onChange={() => {}} />
                        <div className='btnDiv'>
                            <button onClick={() => deleteTodo(todo.id)} className='deleteBtn'>Delete</button>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList