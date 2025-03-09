import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />

        {/* Dynamic Blog Post Route */}
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;