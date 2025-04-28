import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./Components/Teacher";
import Parent from "./Components/Parent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
