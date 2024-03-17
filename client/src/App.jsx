import { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";

import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purpleBlue1 via-darkPurple to-darkBlue h-screen flex justify-center items-center text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
