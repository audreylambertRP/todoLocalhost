import React from 'react'

import Todo from './Todo'

const TodoList = ({todos, filter, deleteTodo, changeTodoStatus}) => {
	return (
		<div>
			{
	            todos.filter((todo) => {
	              return filter === 'all' || filter === todo.status
	            })
	            .map(function(todo, index) {
	            	return (<Todo
	            				key={todo.id}
	            				todo={todo}
	            				index={index}
	            				deleteTodo={deleteTodo}
	            				changeTodoStatus={changeTodoStatus}/>)
	            }.bind(this))
	        }	
		</div>
	)
}

export default TodoList
