import React from "react";

class Square extends React.Component {
  renderButtons(props) {
    const cells = props.numbers.map((cell, index) => {
      return (
        <li key={index}>
          {/*[{index}]&gt;*/}
          <button className="number" onClick={() => props.changeNumber(index)}>
            {cell}
          </button>
        </li>
      );
    });

    return <ul className="list-row">{cells}</ul>;
  }

  render() {
    const numbers = this.props;

    return <div>{this.renderButtons(numbers)}</div>;
  }
}

export { Square };
