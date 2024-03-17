
import { NavLink } from "react-router-dom";
import LogoNegro from "../../assets/LOGONEGRO.png";

function Header() {
  return (
    <div className="bg-purple rounded-b-lg p-8 flex items-center w-full">
      <img src={LogoNegro} alt="logo negro devtalles" className="h-1/6 w-1/3 mr-40" />
      <h1 className="text-7xl ml-4 font-bold">Sorteos</h1>
    </div>
  );
}

export default Header;
