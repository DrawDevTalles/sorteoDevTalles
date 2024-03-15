import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-darkPurple to-purple h-screen flex justify-center items-center"></div>
    </>
  );
}

export default App;
