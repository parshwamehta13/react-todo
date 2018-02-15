import React, { PropTypes } from "react";
import axios from "axios";
import { camelCase, searchList } from "../utility/helpers.js";
import Title from "./todoApp/Title.jsx";
import TodoForm from "./todoApp/TodoForm.jsx";
import TodoList from "./todoApp/TodoList.jsx";
import TodoSearch from "./todoApp/TodoSearch.jsx";

// Contaner Component
export default class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      data: [],
      filteredData: [],
      searchVal: ""
    };
    // TODO: Move this to configurable json
    this.apiUrl = "http://localhost:6999/todos";
  }

  // Lifecycle method
  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data, filteredData: res.data });
    });
  }

  // Search Todos
  searchTodo(event) {
    const val = event.target.value;
    this.setState({
      searchVal: val
    });
    if (val.length !== 0) {
      var list = this.state.data;
      var filteredList = searchList(list, val);
      this.state.filteredData = filteredList;
      this.setState({ filteredData: this.state.filteredData });
    } else {
      this.setState({ filteredData: this.state.data });
    }
  }

  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { name: camelCase(val), displayName: val };

    // Update data
    axios.post(this.apiUrl, todo).then(res => {
      this.state.data.push(todo);
      this.setState({ data: this.state.data, filteredData: this.state.data });
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
      this.setState({
        data: remainder,
        filteredData: this.state.searchVal.length
          ? searchList(remainder, this.state.searchVal)
          : remainder
      });
    });
  }

  render() {
    // Render JSX
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Title todoCount={this.state.filteredData.length} />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <TodoForm addTodo={this.addTodo.bind(this)} />
              </div>
              <div className="col-lg-4">
                <TodoSearch searchTodo={this.searchTodo.bind(this)} />
              </div>
            </div>
            <div className="row">
              {(() => {
                if (this.state.filteredData.length) {
                  return (
                    <TodoList
                      todos={this.state.filteredData}
                      remove={this.handleRemove.bind(this)}
                    />
                  );
                } else {
                  return <h3 className="alert-danger">No Data</h3>;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
