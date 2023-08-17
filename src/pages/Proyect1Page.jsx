import { Link } from "react-router-dom";
import proyect1 from "../assets/Assault.png"
import "./ProyectPage.css"
const Proyect1Page = () => {
    

    return (
        <div id="proyect">
        <h1>Proyect 1</h1>
        <h2>Assault on Somnium Stars</h2>

        <p>This proyect is a game build in one page using DOM manipulation</p>
        <img src={proyect1} alt="AssaultOnSomniumStars" />
        
        <button onClick={() => window.open("https://alegaralon.github.io/AssaultOnSomniumStars/")} className="anchorBtn">
           Try the deploy version 
        </button>
        <button onClick={() => window.open("https://github.com/AleGarAlon/AssaultOnSomniumStars")} className="anchorBtn">
           Go to the GitHub repository 
        </button> <br />
        <Link to="/">
            <button id="backBtn">{"<=(goBack)"}</button>
        </Link>
        </div>
    )
}

export default Proyect1Page;