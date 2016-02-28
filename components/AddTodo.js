import React from 'react'

const AddTodo = ({updateNewTodo, addTodo}) => {
	return (
		<div>
          <input type='text' onChange={updateNewTodo} />
          <input type='submit' value='Add todo' onClick={addTodo}/>
		</div>
	)
}

export default AddTodo