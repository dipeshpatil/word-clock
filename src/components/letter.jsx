import "./letter.css";

function Letter({ value, type, highlight }) {
  return <div className={`letter ${highlight ? type : ""}`}>{value}</div>;
}

export default Letter;
