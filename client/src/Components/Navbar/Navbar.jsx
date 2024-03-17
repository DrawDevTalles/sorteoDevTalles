import React from "react";

const Navbar = () => {
  return (
    <div className="relative bg-darkBlue text-white">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-blue-500 border-t border-solid border-dashed"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, currentColor, transparent)",
        }}
      ></div>
      <nav className="flex justify-between items-center px-4 py-2">
        <img src="\ISO DUO.png" alt=" DevTalles" className="w-28 h-auto" />
        <div className="text-lg">Inicio de sesión</div>
      </nav>
    </div>
  );
};

export default Navbar;
