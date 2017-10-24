import React, { Component } from "react";
import "../ModalButton/style.scss";
import ModalButton from "../ModalButton/index";

class TodoListAddModal extends Component{
    state = {
        opened: false,
    };
    toggleOverlayFade(){
      this.setState({ opened: !this.state.opened });
    }
    onSubmit(){

    }
    render(){
        const overlayClass = ['overlay'];
        if(this.state.opened) overlayClass.push('-opened');

        return(
            <div className="todolist-add-modal">
              <ModalButton>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <input type="text"/>
                  <textarea type="text"/>
                </form>
              </ModalButton>
            </div>
        );
    }
}
export default TodoListAddModal;
