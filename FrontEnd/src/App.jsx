import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import AddExpense from "./AddExpense";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/add" element={<AddExpense />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;