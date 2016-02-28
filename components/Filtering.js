import React from 'react'

const Filtering = ({changeFilter}) => {
	return (
		<div>
			<button type='button' onClick={changeFilter('all')}>Display all</button>
			<button type='button' onClick={changeFilter('todo')}>Display only todos</button>
			<button type='button' onClick={changeFilter('done')}>Display only done</button>
		</div>
	)
}

export default Filtering
