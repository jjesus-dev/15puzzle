import React from "react";
import { Square } from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //numbers: Array(4).fill(null),
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };
  }

  changeNumber = (index) => {
    const arrangedNumbers = this.state.numbers;
    let movedNumber;
    // Find the blank square (16)
    const blankIndex = arrangedNumbers.indexOf(16);

    if (arrangedNumbers[index] !== 16) {
      console.log(arrangedNumbers[index] + ": Can move.");
      movedNumber = arrangedNumbers[index];
      arrangedNumbers.splice(blankIndex, 1, movedNumber);
      arrangedNumbers.splice(index, 1, 16);

      this.setState({
        numbers: arrangedNumbers,
      });
    } else {
      console.log("Can't move the same number.");
    }
  };

  render() {
    const title = "Arrange the numbers";
    const newNumbers = this.state.numbers;

    return (
      <div>
        <div>{title}</div>
        <Square numbers={newNumbers} changeNumber={this.changeNumber} />
      </div>
    );
  }
}

export { Board };
