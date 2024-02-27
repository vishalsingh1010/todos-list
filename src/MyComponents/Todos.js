import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>
        Todos List 
        {/* {props.todos} */}
        <TodoItem todo={props.todo}/>
      </h3>
    </div>
  )
}

export default Todos
