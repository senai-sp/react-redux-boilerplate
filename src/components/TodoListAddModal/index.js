import React, { Component } from "react";
import "./style.scss";

class TodoListAddModal extends Component{
    state = {
        opened: false,
    };
    toggleOverlayFade(){
        this.setState({ opened: !this.state.opened });
    }
    render(){
        const overlayClass = ['overlay'];
        if(this.state.opened) overlayClass.push('-opened');

        return(
            <div className="modal todolist-add-modal">
                <button className="button -action" onClick={this.toggleOverlayFade.bind(this)}>
                    <span>+</span>
                </button>
                <div className="card">
                    <form>
                        <div className="form-group">

                        </div>
                    </form>
                </div>
                <div onClick={this.toggleOverlayFade.bind(this)} className={overlayClass.join(' ')}></div>
            </div>
        );
    }
}
export default TodoListAddModal;
