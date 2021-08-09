import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/DisplayButton.scss";

export default class DisplayButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="DisplayButton">
        <button onClick={() => this.props.onClick(this.props.type)}>
          <i className={`fas fa-${this.props.icon}`}></i>
        </button>
      </div>
    );
  }
}
