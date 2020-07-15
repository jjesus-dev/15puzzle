import React from "react";
import { Square } from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.props.shuffledNumbers,
    };
  }

  // TODO: Change logging to visible messages in html.
  changeNumber = (index) => {
    const arrangedNumbers = this.state.numbers;
    let movedNumber;
    // Find the blank square (16)
    const blankIndex = arrangedNumbers.indexOf(16);

    // Check the values in buttons
    if (
      arrangedNumbers[index] !== 16 &&
      !this.checkForbidden(index, blankIndex)
    ) {
      //console.log(arrangedNumbers[index] + ": Can move.");
      movedNumber = arrangedNumbers[index];
      arrangedNumbers.splice(blankIndex, 1, movedNumber);
      arrangedNumbers.splice(index, 1, 16);

      this.setState({
        numbers: arrangedNumbers,
      });
    }
    /* else {
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
    const newNumbers = this.state.numbers;

    return (
      <div className="container">
        <div>
          <p>
            {" "}
            Tips:
            <ul>
              <li>Click one number to move it one cell</li>
              <li>Sort from 1 to 15</li>
              <li>Press F5 to reset</li>
            </ul>
          </p>
          <SolutionMessage
            solution={this.props.solution}
            numbers={this.state.numbers}
          />
        </div>

        <div>
          <Square numbers={newNumbers} changeNumber={this.changeNumber} />
        </div>
      </div>
    );
  }
}

function SolutionMessage(props) {
  if (
    props.solution.lenght === props.numbers.lenght &&
    props.solution.every((value, index) => value === props.numbers[index])
  ) {
    return <p className="solved">Congratulations!</p>;
  } else {
    return <p className="unsolved">Keep it going...</p>;
  }
}

export { Board };
