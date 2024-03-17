import ContestCard from "../ContestCard/ContestCard"
import { NavLink} from "react-router-dom";
import Header from "../Header/Header";
function Home() {

   return (
      <div className="h-full w-full">
       
        <ContestCard />
        <NavLink to="/login"><button>Participa</button></NavLink>
      </div>
    )
    
  }
  
  export default Home
  