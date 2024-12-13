import { Link } from "react-router-dom";
import "./Candy.css";
function Candy() {
  return (
    <div className="candy">
      <h1> Candy!! </h1>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Candy;
