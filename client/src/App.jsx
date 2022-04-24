import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./views/HomePage";
import FormPage from "./views/FormPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
