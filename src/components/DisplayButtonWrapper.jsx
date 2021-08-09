import React, { Component } from "react";
import DisplayButton from "./DisplayButton";

import "../styles/DisplayButtonWrapper";

export default class DisplayButtonWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`DisplayButtonWrapper ${this.props.type}Wrapper ${this.props.selected ? "" : "darken"}`}>
        <DisplayButton onClick={this.props.onIncrement} type={this.props.type} icon="caret-up" />
        <DisplayButton onClick={this.props.onDecrement} type={this.props.type} icon="caret-down" />
      </div>
    );
  }
}
