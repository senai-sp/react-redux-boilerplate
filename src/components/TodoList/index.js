import React, { Component } from "react";
import Todo from "../Todo/index";
import PropTypes from 'prop-types';
import "./style.scss";

class TodoList extends Component{
    static propTypes ={
        onToggleTodo: PropTypes.func.isRequired
    };
    render(){
        return(
            <div className="card todolist">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.todos.map( (todo, key) => <Todo onToggleTodo={this.props.onToggleTodo} {...todo} key={key} />)}
                </ul>
            </div>
        );
    }
}
export default TodoList;
