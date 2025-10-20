import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from "./assets/page/Page";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}
