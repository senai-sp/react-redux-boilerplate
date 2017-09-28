import React, { Component } from "react";
import TodoList from "../../components/TodoList/index";

class TodoListScreen extends Component{
    renderTodos(){
        return this.props.todolists.items.map(todo => <TodoList {...todo} />);
    }
    render(){
        return(
            <div className="container">
                <h1>TODOLIST SCREEN</h1>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    }
}
export default TodoListScreen;
