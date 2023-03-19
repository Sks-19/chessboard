import Square from "../Square/square";
import "./board.css";
import Pattern from "../../Pattern/pattern";

const Board = () => {
  return (
    <div className="board">
      {Pattern.map((patRow, rdx) => {
        return (
          <div className="row">
            {patRow.map((patCol, cdx) => (
              <Square value={patCol} row={rdx} col={cdx} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
