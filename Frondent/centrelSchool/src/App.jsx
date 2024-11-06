// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar/>
        <Routes>
      
        <Route path="/" element={<Home />} />
        </Routes>

      
      </Router>
    </div>
  );
}

export default App;
