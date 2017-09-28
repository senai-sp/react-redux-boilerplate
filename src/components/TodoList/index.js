import React, { Component } from "react";
import Todo from "../Todo/index";
import "./style.scss";

class TodoList extends Component{
    render(){
        return(
            <div className="card todolist">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.todos.map( (todo, key) => <Todo {...todo} key={key} />)}
                </ul>
            </div>
        );
    }
}
export default TodoList;
