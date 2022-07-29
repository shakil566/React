import React, { Component } from "react";
class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { name: "Mango", weight: "324" },
        { name: "Orange", weight: "23" },
        { name: "Banna", weight: "43" },
        { name: "Lichi", weight: "43" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Fruits name {this.state.fruits[0].name} and weight is{" "}
          {this.state.fruits[0].weight}
        </h1>
        <h1>
          Fruits name {this.state.fruits[1].name} and weight is{" "}
          {this.state.fruits[0].weight}
        </h1>
        <h1>
          Fruits name {this.state.fruits[2].name} and weight is{" "}
          {this.state.fruits[0].weight}
        </h1>
        <h1>
          Fruits name {this.state.fruits[3].name} and weight is{" "}
          {this.state.fruits[0].weight}
        </h1>
      </div>
    );
  }
}
export default Thanks;
