import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
