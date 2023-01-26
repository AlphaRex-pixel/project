import Dashboard from "./Dashboard.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;