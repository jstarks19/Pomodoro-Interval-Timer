import React, { Component } from "react";
import "../styles/index.scss";
import Display from "./Display";
import Interface from "./Interface";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pomoMinutes: 25,
      restMinutes: 5,
      pomoSeconds: 25 * 60,
      restSeconds: 5 * 60,
      selection: "Pomo",
      paused: true,
      interval: null,
    };
    console.log("PAUSED");
    this.tickDown = this.tickDown.bind(this);
    this.switch = this.switch.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.incrementMinutes = this.incrementMinutes.bind(this);
    this.decrementMinutes = this.decrementMinutes.bind(this);
  }

  incrementMinutes(type) {
    if (this.state.paused) {
      switch (type) {
        case "Pomo":
          let currPomoMin = Math.floor(this.state.pomoSeconds / 60);
          currPomoMin++;
          this.setState({ pomoSeconds: currPomoMin * 60, pomoMinutes: currPomoMin });
          break;
        case "Rest":
          let currRestMin = Math.floor(this.state.restSeconds / 60);
          currRestMin++;
          this.setState({ restSeconds: currRestMin * 60, restMinutes: currRestMin });
          break;
      }
    }
  }

  decrementMinutes(type) {
    if (this.state.paused) {
      switch (type) {
        case "Pomo":
          let currPomoMin = Math.ceil(this.state.pomoSeconds / 60);
          if (currPomoMin !== 0) {
            currPomoMin--;
            this.setState({ pomoSeconds: currPomoMin * 60, pomoMinutes: currPomoMin });
          }
          break;
        case "Rest":
          let currRestMin = Math.ceil(this.state.restSeconds / 60);
          if (currRestMin !== 0) {
            currRestMin--;
            this.setState({ restSeconds: currRestMin * 60, restMinutes: currRestMin });
          }
          break;
      }
    }
  }

  tickDown() {
    if (!this.state.paused) {
      if (this.state.selection === "Pomo") {
        this.setState({ pomoSeconds: this.state.pomoSeconds - 1 });
      } else {
        // state === rest
        this.setState({ restSeconds: this.state.restSeconds - 1 });
      }
    }
  }

  switch(type) {
    this.pause();
    let state = this.state.selection === "Pomo" ? "Rest" : "Pomo";
    this.setState({ selection: state });
  }

  pause() {
    if (!this.state.paused) {
      console.log("PAUSED");
      clearInterval(this.state.interval);
      this.setState({ interval: null });
      this.setState({ paused: true });
    }
  }

  reset() {
    this.pause();
    console.log("RESET: ", this.state.selection);
    if (this.state.selection === "Pomo") {
      this.setState({ pomoSeconds: this.state.pomoMinutes * 60 });
    } else {
      this.setState({ restSeconds: this.state.restMinutes * 60 });
    }
  }

  play() {
    if (this.state.paused) {
      console.log("UNPAUSED");
      let intv = setInterval(this.tickDown, 1000);
      this.setState({ paused: false, interval: intv });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Display-Wrapper">
          <Display
            onIncrement={this.incrementMinutes}
            onDecrement={this.decrementMinutes}
            secondsPomo={this.state.pomoSeconds}
            secondsRest={this.state.restSeconds}
            selection={this.state.selection}
          />
        </div>
        <div className="Display-Base"></div>
        <Interface
          selection={this.state.selection}
          functions={{ switch: this.switch, pause: this.pause, reset: this.reset, play: this.play }}
        />
      </div>
    );
  }
}

export default App;
