import React, { Component } from "react";
import "../styles/InterfaceBtn.scss";

export default class InterfaceBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`Interface-${this.props.type}`}>
        <button onClick={() => this.props.onClick()}>
          <i className={`fas fa-${this.props.text}`}></i>
        </button>
      </div>
    );
  }
}
