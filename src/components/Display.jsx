import React, { Component } from "react";
import DisplayNumbers from "./DisplayNumbers";
import DisplayButtonWrapper from "./DisplayButtonWrapper";

import "../styles/Display";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispOneSeconds: 25 * 60,
      dispTwoSeconds: 5 * 60,
      paused: true,
      interval: null,
    };
    this.selectHuh = this.selectHuh.bind(this);
  }

  secondsToMinutes(seconds) {
    let mnts = Math.floor(seconds / 60);
    let scnds = seconds % 60;
    return mnts.toString().padStart(2, 0) + ":" + scnds.toString().padStart(2, 0);
  }

  selectHuh(type) {
    return this.props.selection === type ? true : false;
  }

  render() {
    return (
      <div className="Display">
        <DisplayButtonWrapper
          selected={this.selectHuh("Pomo")}
          type="Pomo"
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
        <DisplayNumbers
          selected={this.selectHuh("Pomo")}
          valueString={this.secondsToMinutes(this.props.secondsPomo)}
          type="Pomo"
        />
        <DisplayNumbers
          selected={this.selectHuh("Rest")}
          valueString={this.secondsToMinutes(this.props.secondsRest)}
          type="Rest"
        />
        <DisplayButtonWrapper
          selected={this.selectHuh("Rest")}
          type="Rest"
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
      </div>
    );
  }
}
