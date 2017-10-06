import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component{
    static propTypes ={
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        onToggleTodo: PropTypes.func.isRequired
    };
    state = {
        checked: false,
    };
    componentWillMount(){
        this.setState({
            checked: this.props.done
        });
    }
    onToggleTodo(){
        this.props.onToggleTodo(this.props.id, this.props.done);
        this.setState({
            checked: !this.state.checked
        });
    }
    render(){
        return(
            <div className="row">
                <label>
                    <input onChange={this.onToggleTodo.bind(this)} type="checkbox" checked={this.state.checked} />
                    {this.props.description}
                </label>
            </div>
        );
    }
}
export default Todo;
