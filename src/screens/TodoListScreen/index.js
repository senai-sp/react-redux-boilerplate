import React, { Component } from "react";
import './style.scss';
import TodoListListContainer from "../../containers/TodoListListContainer";

class TodoListScreen extends Component{
    render(){
        return(
            <div className="container">
                <h1>TODOLIST SCREEN</h1>
                <ul className="todolist-container">
                    <TodoListListContainer />
                </ul>
            </div>
        );
    }
}
export default TodoListScreen;
