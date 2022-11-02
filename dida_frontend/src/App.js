import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./component/Login";
import Home from "./pages/Home";
import Try from "./component/Try";
import Log2 from "./component/Log2";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="try" element={<Try />} />
      <Route path="log2" element={<Log2 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
