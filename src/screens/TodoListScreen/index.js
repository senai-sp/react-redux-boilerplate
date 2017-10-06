import React, { Component } from "react";
import './style.scss';
import TodoListListContainer from "../../containers/TodoListListContainer";
import TodoListAddContainer from "../../containers/TodoListAddContainer";

class TodoListScreen extends Component{
    render(){
        return(
            <div className="container">
                <h1>TODOLIST SCREEN</h1>
                <ul className="todolist-container">
                    <TodoListListContainer />
                    <TodoListAddContainer />
                </ul>
            </div>
        );
    }
}
export default TodoListScreen;
