import React, { Component } from "react";
import TodoList from "../TodoList/index";


class TodoListList extends Component{
    componentDidMount(){
        this.props.listTodoList();
    }
    onToggleTodo(todo_id, done){
        this.props.updateTodo(todo_id,{done});
    }
    renderTodos(){

        const todolists = this.props.todolists.items;
        const todolists_ids = Object.keys(todolists);

        const todos = this.props.todos.items;
        const todos_ids = Object.keys(todos);

        if(!todolists_ids.length || !todos_ids.length)
            return <h1>Loading</h1>;

        const todoListsComponents = todolists_ids.map(todolist_id => {
            const todolist = {...todolists[todolist_id]};
            todolist.todos = todolist.todos.map( todo_id => todos[todo_id]);
            return <TodoList onToggleTodo={this.onToggleTodo.bind(this)} key={todolist_id} {...todolist} />
        });
        return todoListsComponents;
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
