import { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

export const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    const boardcopy = [...state.board];

    if (winner || boardcopy[index]) return;
    boardcopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      board: boardcopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardcopy);
    // setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};
