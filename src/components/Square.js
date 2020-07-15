import React from "react";

class Square extends React.Component {
  renderButtons(props) {
    const cells = props.numbers.map((cell, index) => {
      return (
        <li key={index}>
          <button
            className={`cell-number ${
              cell === 16 ? "hidden-number" : "visible-number"
            }`}
            onClick={() => props.changeNumber(index)}
          >
            {cell}
          </button>
        </li>
      );
    });

    return <ul className="grid">{cells}</ul>;
  }

  render() {
    const numbers = this.props;

    return <div>{this.renderButtons(numbers)}</div>;
  }
}

export { Square };
