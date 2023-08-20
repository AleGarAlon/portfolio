import { Link } from "react-router-dom";
import proyect1 from "../assets/Assault.png"
import GitHub from "../assets/GitHub.png"
import play from "../assets/play.png"
import "./ProyectPage.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import JS from "../assets/JS.png"
const Proyect1Page = () => {
    

    return (
        <div className="proyect">
        
        <h2 className="name">Assault on Somnium Stars</h2>

        <p className="description">This proyect is a game build in one page using DOM manipulation.</p>
        <div className="use">
                        <img className="devIcons" src={html} alt="html" />
                        <img className="devIcons" src={css} alt="css" />
                        <img className="devIcons" src={JS} alt="JS" />
                    </div>
        <a href="https://alegaralon.github.io/AssaultOnSomniumStars/"><img className="proyectPhoto" src={proyect1} alt="AssaultOnSomniumStars" /></a>
        
        <div className="links">
        <a  href="https://alegaralon.github.io/AssaultOnSomniumStars/" target="_blank"><img className="linkIcons" src={play} alt="demo" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/AssaultOnSomniumStars" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        </div>
        <Link to="/">
            <button className="backBtn">Back</button>
        </Link>
        </div>
    )
}

export default Proyect1Page;