import { Link } from "react-router-dom";
import Chip from "./Chip";
import { useState } from "react";
import "./Chips.css";

function Chips() {
  const [chips, setChips] = useState([]);
  const getChip = () => {
    const xPos = Math.random() * (window.innerWidth - 250);
    const yPos = Math.random() * (window.innerHeight - 250);
    setChips([...chips, { xPos, yPos }]);
  };
  const chipComponent = chips.map((c, i) => (
    <Chip xPos={c.xPos} yPos={c.yPos} key={i} />
  ));
  return (
    <div className="chips">
      <div className="chips-container">
        <h1> Chips!! </h1>
        <div className="chips-counter-container">
          <p>{chips.length}</p>
        </div>
        <button onClick={getChip}>GIVE ME MOOOOREE</button>
        {chipComponent}
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Chips;
