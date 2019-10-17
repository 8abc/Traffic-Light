import React from "react";
import "../style.css";

export default class TrafficLight extends React.Component {
  //this is needed for state
  constructor() {
    super();
    //this is the default value when the page loads
    this.state = {
      clickedLight: null
    };
  }
  render() {
    console.log(this.state);
    const clickedLight = this.state.clickedLight;
    let redExtraClass = "";
    if (clickedLight == "red") redExtraClass = "clicked";
    let yellowExtraClass = "";
    if (clickedLight == "yellow") yellowExtraClass = "clicked";
    let greenExtraClass = "";
    if (clickedLight == "green") greenExtraClass = "clicked";
    return (
      <div>
        <div className="container">
          <div
            className={"red light " + redExtraClass}
            onClick={() => this.setState({ clickedLight: "red" })}
          ></div>
          <div
            className={"yellow light " + yellowExtraClass}
            onClick={() => this.setState({ clickedLight: "yellow" })}
          ></div>
          <div
            className={"green light " + greenExtraClass}
            onClick={() => this.setState({ clickedLight: "green" })}
          ></div>
        </div>
      </div>
    );
  }
}
