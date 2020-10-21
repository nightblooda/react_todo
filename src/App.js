import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Put the trash out.",
        completed: false
      },
      {
        id: 2,
        title: "Meeting with investors.",
        completed: false
      },
      {
        id: 3,
        title: "Improve design of the application.",
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  render(){

    return (
      <div className="App">
      <Header />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
