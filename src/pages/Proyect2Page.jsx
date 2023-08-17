import { Link } from "react-router-dom";
import proyect2 from "../assets/HomeboundExplorers.png"
import "./ProyectPage.css"
const Proyect2Page = () => {

    return (
        <div id="proyect">
        <h1>Proyect 2</h1>
        <h2>Homebound Explorers</h2>

        <p>This proyect is a webpage that offers Activiries to do with kids depending on their age</p>
        <img src={proyect2} alt="HomeboundExplorers" />
        
        <button onClick={() => window.open("https://homeboundexplorers.adaptable.app/")} className="anchorBtn">
            Try the deploy version 
        </button>
        <button onClick={() => window.open("https://github.com/AleGarAlon/Module2-Proyect")} className="anchorBtn">
           Go to the GitHub repository
        </button> <br />
        <Link to="/">
            <button id="backBtn">{"<=(goBack)"}</button>
        </Link>
        </div>
    )
}


export default Proyect2Page;