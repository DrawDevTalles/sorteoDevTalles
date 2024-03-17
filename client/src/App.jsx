import { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
     <Header className="w-full h-1/5" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
