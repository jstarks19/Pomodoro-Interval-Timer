import React, { Component } from "react";
import "../styles/DisplayNumbers.scss";

export default class DisplayNumbers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`DisplayNumbers ${this.props.type}Numbers ${this.props.selected ? "" : "darken"}`}>
        <span>{this.props.valueString}</span>
      </div>
    );
  }
}
