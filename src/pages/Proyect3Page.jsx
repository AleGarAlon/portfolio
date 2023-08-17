import { Link } from "react-router-dom";
import Proyect3 from "../assets/PurrfectPawrtners.png"
import "./ProyectPage.css"
const Proyect3Page = () => {

    return (
        <div id="proyect">
        <h1>Proyect 3</h1>
        <h2>Purrfect pawrtners</h2>

        <p>In this project, there are two distinct deployments: one for the backend and API, and another using React for the frontend. The goal is to create an application specifically designed for cat adoption.</p>
        <img src={Proyect3} alt="Purrfect Pawrtners" />
        
        <button  onClick={() => window.open("https://legendary-tanuki-442740.netlify.app/")} className="anchorBtn" >
           Try the deploy version
        </button>
        <button  onClick={() => window.open("https://github.com/AleGarAlon/Proyect3-front")} className="anchorBtn">
           Go to the GitHub repository(Front) 
        </button>
        <button onClick={() => window.open("https://github.com/AleGarAlon/Proyect3-back")} className="anchorBtn">
           Go to the GitHub repository(Back)
        </button> <br />
        <Link to="/">
            <button id="backBtn">{"<=(goBack)"}</button>
        </Link>
        </div>
    )
}

export default Proyect3Page;