import "./square.css";

const Square = ({ value, row, col }) => {
  if ((row % 2 === 0 && col % 2 === 0) || (row % 2 !== 0 && col % 2 !== 0)) {
    return <div className="square whiteBox">{value}</div>;
  } else {
    return <div className="square blackBox">{value}</div>;
  }
};

export default Square;
