import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
  return (
    <div className="vending-machine">
      <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      <div className="vending-machine-items">
        <Link to="/candy">Candy</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/soda">Soda</Link>
      </div>
    </div>
  );
}

export default VendingMachine;
