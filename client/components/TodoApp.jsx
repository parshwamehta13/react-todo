import React, { PropTypes } from "react";
import axios from "axios";
import { camelCase } from '../utility/helpers.js';
import Title from './todoApp/Title.jsx';
import TodoForm from './todoApp/TodoForm.jsx';
import TodoList from './todoApp/TodoList.jsx';

// Contaner Component
export default class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
    this.apiUrl = "http://localhost:6999/todos";
  }
  // Lifecycle method
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      debugger;
      this.setState({ data: res.data });
      console.log(this.state)
    });
  }
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { name: camelCase(val), displayName: val };

    // Update Data
    // this.state.data.push(todo);
    // this.setState({ data: this.state.data });

    // Update data
    axios.post(this.apiUrl, todo).then(res => {
      this.state.data.push(todo);
      this.setState({ data: this.state.data });
    });
  }
  // Handle remove
  handleRemove(name) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter(todo => {
      if (todo.name !== name) return todo;
    });
    // this.setState({ data: remainder });
    // Update state with filter
    axios.delete(this.apiUrl + "/" + name).then(res => {
      this.setState({ data: remainder });
    });
  }

  render() {
    // Render JSX
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Title todoCount={this.state.data.length} />
            <TodoForm addTodo={this.addTodo.bind(this)} />
            <TodoList
              todos={this.state.data}
              remove={this.handleRemove.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

