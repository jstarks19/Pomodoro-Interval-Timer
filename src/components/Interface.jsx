import React, { Component } from "react";
import InterfaceBtn from "./InterfaceBtn";
import InterfaceToggleBtn from "./InterfaceToggleBtn";
import "../styles/Interface.scss";

export default class Interface extends Component {
  constructor(props) {
    super(props);
    this.selectHuh = this.selectHuh.bind(this);
  }
  selectHuh(type) {
    return this.props.selection === type ? true : false;
  }
  render() {
    return (
      <div className="Interface">
        <div className="Interface-Toggle">
          <InterfaceToggleBtn
            disabled={this.selectHuh("Rest") ? "" : "disabled"}
            type="TogglePomo"
            text="book-open"
            onClick={this.props.functions.switch}
          />
          <InterfaceToggleBtn
            disabled={this.selectHuh("Pomo") ? "" : "disabled"}
            type="ToggleRest"
            text="book"
            onClick={this.props.functions.switch}
          />
        </div>
        <div className="Interface-Main">
          <InterfaceBtn type="Play" text="play" onClick={this.props.functions.play} />
          <InterfaceBtn type="Reset" text="undo-alt" onClick={this.props.functions.reset} />
          <InterfaceBtn type="Pause" text="pause" onClick={this.props.functions.pause} />
        </div>
      </div>
    );
  }
}
