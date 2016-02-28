import React from 'react'

const Todo = ({todo, index, deleteTodo, changeTodoStatus}) => {
	return (
		<div>
			<li>{index + 1} : {todo.text}</li>
			<button type='button' onClick={deleteTodo.bind(null, todo.id)}>Delete todo</button>
			<button type='button' onClick={changeTodoStatus.bind(null, todo.id)}>Is it done?</button>
		</div>
	)
}

export default Todo