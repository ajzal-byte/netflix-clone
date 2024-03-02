import React from "react";
import "./App.css";
import {HomeScreen, LoginPage} from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
