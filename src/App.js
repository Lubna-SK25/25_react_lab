import { BrowserRouter as Router, Route } from "react-router-dom";
import Part1 from "./part1";
import Part2 from "./part2";
import { Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/part1" element={<Part1 />} />
        <Route path="/part2" element={<Part2 />} />
      </Routes>
    </Router>
  );
}

export default App;
