import React from "react";
import { Square } from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };
  }

  // TODO: Change logging to visible messages in html.
  changeNumber = (index) => {
    const arrangedNumbers = this.state.numbers;
    let movedNumber;
    // Find the blank square (16)
    const blankIndex = arrangedNumbers.indexOf(16);

    // Check the values in buttons
    if (arrangedNumbers[index] !== 16) {
      if (!this.checkForbidden(index, blankIndex)) {
        //console.log(arrangedNumbers[index] + ": Can move.");
        movedNumber = arrangedNumbers[index];
        arrangedNumbers.splice(blankIndex, 1, movedNumber);
        arrangedNumbers.splice(index, 1, 16);

        this.setState({
          numbers: arrangedNumbers,
        });
      }
    } /* else {
      console.log("Can't move the same number.");
    }*/
  };

  checkForbidden(index, movedTo) {
    // Checking for horizontal and vertical movements
    if (Math.abs(index - movedTo) === 1 || Math.abs(index - movedTo) === 4) {
      // One corner to the oposite side on the previous or next row.
      if ((index === 3 && movedTo === 4) || (index === 4 && movedTo === 3)) {
        return true;
      } else if (
        (index === 7 && movedTo === 8) ||
        (index === 8 && movedTo === 7)
      ) {
        return true;
      } else if (
        (index === 11 && movedTo === 12) ||
        (index === 12 && movedTo === 11)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

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
