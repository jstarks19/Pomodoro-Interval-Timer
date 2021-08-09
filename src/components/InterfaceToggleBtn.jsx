import React, { Component } from "react";

export default class InterfaceToggleBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`Interface-${this.props.type}`}>
        <button onClick={() => this.props.onClick(this.props.type)} disabled={this.props.disabled}>
          <i className={`fas fa-${this.props.text}`}></i>
        </button>
      </div>
    );
  }
}
