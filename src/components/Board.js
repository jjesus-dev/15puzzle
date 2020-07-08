import React from "react";
import { Square } from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array(3).fill(null),
    };
  }

  renderNumber(i) {
    return (
      <Square
        value={this.state.numbers[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const numbers = this.state.numbers.slice();
    numbers[i] = "X";
    this.setState({ numbers, numbers });
  }

  render() {
    const title = "Move the numbers";

    return (
      <div>
        <div>{title}</div>
        <div>{this.renderNumber(0)}</div>
        <div>{this.renderNumber(1)}</div>
        <div>{this.renderNumber(2)}</div>
      </div>
    );
  }
}

export { Board };
