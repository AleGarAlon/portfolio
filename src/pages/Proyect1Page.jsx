import { Link } from "react-router-dom";
import proyect1 from "../assets/Assault.png"
import GitHub from "../assets/GitHub.png"
import play from "../assets/play.png"
import "./ProyectPage.css"
const Proyect1Page = () => {
    

    return (
        <div className="proyect">
        
        <h2 className="name">Assault on Somnium Stars</h2>

        <p className="description">This proyect is a game build in one page using DOM manipulation</p>
        <img className="proyectPhoto" src={proyect1} alt="AssaultOnSomniumStars" />
        
        <div className="links">
        <a  href="https://alegaralon.github.io/AssaultOnSomniumStars/" target="_blank"><img className="linkIcons" src={play} alt="demo" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/AssaultOnSomniumStars" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        </div>
        <Link to="/">
            <button className="backBtn">{"<=(goBack)"}</button>
        </Link>
        </div>
    )
}

export default Proyect1Page;