import { Link } from "react-router-dom";
import "./Soda.css";

function Soda() {
  return (
    <div className="soda">
      <div className="soda-container">
        <h1> Soda!! </h1>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Soda;
