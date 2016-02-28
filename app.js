import React from 'react'

import TodoList from './components/Todolist'
import AddTodo from './components/AddTodo'
import Filtering from './components/Filtering'

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
     todos: this.state.todos.concat({id: this.idCounter++, text: this.newTodo, status: 'todo'})
   })
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(function(todo) {
        return id !== todo.id
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
        <h1>My brand new todo</h1>

        <AddTodo
          updateNewTodo={this.updateNewTodo.bind(this)}
          addTodo={this.addTodo.bind(this)} />

        <TodoList
          todos={this.state.todos}
          filter={this.state.filter}
          deleteTodo={this.deleteTodo.bind(this)}
          changeTodoStatus={this.changeTodoStatus.bind(this)} />

        <Filtering
          changeFilter={this.changeFilter.bind(this)} />
      </div>
    );
  }
}
