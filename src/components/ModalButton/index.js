import React, { Component } from "react";
import Card from '../Card';
import "./style.scss";

class ModalButton extends Component{
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
      <div className="modal">
        <button className="button -action" onClick={this.toggleOverlayFade.bind(this)}>
          <span>+</span>
        </button>
        <div onClick={this.toggleOverlayFade.bind(this)} className={overlayClass.join(' ')}>
          <Card>
            {this.props.children}
          </Card>
        </div>
      </div>
    );
  }
}
export default ModalButton;
