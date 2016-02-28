import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id:1, text:'first', status:'todo'},
        {id:2, text:'second', status:'todo'},
        {id:3, text:'third', status:'todo'}
      ],
      filter: 'all'
    }
    this.newTodo = ''
    this.idCounter = 4
  }

  updateNewTodo(e) {
    this.newTodo = e.target.value
  }

  addTodo(e) {
   this.setState({
     todos: this.state.todos.concat({id: this.idCounter++, text: this.newTodo})
   })
  }

  deleteTodo(i) {
    this.setState({
      todos: this.state.todos.filter(function(elem, index, array) {
        return i !== index
      })
    })
  }

  changeFilter(filter) {
    return () => {
      this.setState({
        filter
      })
    }
 }

  changeTodoStatus(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: (todo.status === 'todo' ? 'done' : 'todo') 
          }
          // todo.status = (todo.status === 'todo' ? 'done' : 'todo')
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div>
        <h1>My new todo</h1>

        <div id='addTodo'>
          <input type="text" onChange={this.updateNewTodo.bind(this)} />
          <input type='submit' value='Add todo' onClick={this.addTodo.bind(this)}/>
        </div>

        <div id ='todoList'>
          {
            this.state.todos.filter((todo) => {
              return this.state.filter === 'all' || this.state.filter === todo.status
            })
            .map(function(todo, index) {
              return <div key={todo.id}>
                        <li>{index + 1} : {todo.text}</li>
                        <button type='button' onClick={this.deleteTodo.bind(this, index)}>Delete todo</button>
                        <button type='button' onClick={this.changeTodoStatus.bind(this, todo.id)}>Is it done?</button>
                     </div>
            }.bind(this))
          }
        </div>

        <div id='filtering'>
          <button type='button' onClick={this.changeFilter('all')}>Display all</button>
          <button type='button' onClick={this.changeFilter('todo')}>Display only todos</button>
          <button type='button' onClick={this.changeFilter('done')}>Delete only done</button>
        </div>
      </div>
    );
  }
}
