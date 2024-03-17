import ContestCard from "../ContestCard/ContestCard"
import { NavLink} from "react-router-dom";
function Home() {

    return (
     <div>
        <ContestCard/>
        <NavLink to="/login">
        <button> Participa </button>
            </NavLink>
        
     </div>
    )
  }
  
  export default Home
  