import React, { Component } from "react";

class TodoList extends Component{
    render(){
        return(
            <div className="card todolist">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.todos.map(todo => <li>{todo.title}</li>)}
                </ul>
            </div>
        );
    }
}
export default TodoList;
