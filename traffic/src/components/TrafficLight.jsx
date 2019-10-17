import React from "react";
import "../style.css";

export default class TrafficLight extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="light" id="red"></div>
          <div className="light" id="yellow"></div>
          <div className="light" id="green"></div>
        </div>
      </div>
    );
  }
}
