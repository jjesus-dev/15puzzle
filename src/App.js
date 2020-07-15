import React from "react";
import { Board } from "./components/Board";

function App() {
  const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const shuffledNumbers = suffle(solution.slice());
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">15 Puzzle game</h2>
      </header>
      <Board solution={solution} shuffledNumbers={shuffledNumbers} />
      <footer className="App-footer">
        <p className="author">
          Created by: <strong>Javier Jes&uacute;s</strong> using{" "}
          <strong>React</strong>. Get the source code on
          <strong>
            {" "}
            <a href="https://github.com/jjesus-dev/15puzzle">GitHub</a>
          </strong>
        </p>
      </footer>
    </div>
  );
}

// Durstenfeld shuffle algorithm
function suffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default App;
