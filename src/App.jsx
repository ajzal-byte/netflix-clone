import React, { useEffect } from "react";
import "./App.css";
import {HomeScreen, LoginPage, ProfilePage} from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/userSlice"

function App() {
  // const user = "ajzal"
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]); // <- This array is important for useEffect, it's a dependency array


  return (
    <div className="app">
      <div><Toaster/></div>
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/profile" element={<ProfilePage />}></Route>
          </Routes>
          
        )}
      </Router>
    </div>
  );
}

export default App;
