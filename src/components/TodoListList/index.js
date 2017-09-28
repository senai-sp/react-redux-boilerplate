import React, { Component } from "react";
import TodoList from "../TodoList/index";

class TodoListList extends Component{
    componentDidMount(){
        this.props.listTodoList();
    }
    renderTodos(){
        if(this.props.todolists.items.length)
            return this.props.todolists.items.map( (todo, key) => <TodoList key={key} {...todo} />);
        return <h1>Loading</h1>
    }
    render(){
        return(
            <ul className="todolist-container">
                {this.renderTodos()}
            </ul>
        );
    }
}
export default TodoListList;
