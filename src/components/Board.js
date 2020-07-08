import React from "react";
import { Square } from "./Square";

class Board extends React.Component {
  renderNumbers(i) {
    return <Square value={i} />;
  }

  render() {
    const title = "Move the numbers";

    return (
      <div>
        <div>{title}</div>
        <div>{this.renderNumbers(1)}</div>
        <div>{this.renderNumbers(2)}</div>
        <div>{this.renderNumbers(null)}</div>
      </div>
    );
  }
}

export { Board };
