import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component{
    static propTypes ={
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    };
    render(){
        return(
            <div className="row">
                <input type="checkbox" checked={this.props.done} />
                <small>{this.props.description}</small>
            </div>
        );
    }
}
export default Todo;
