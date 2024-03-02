import React, { useEffect } from "react";
import "./App.css";
import {HomeScreen, LoginPage} from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
      }else{
        // Logged out
      }
      return unsubscribe;
    },[])
  })
  return (
    <div className="app">
      <div><Toaster/></div>
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
