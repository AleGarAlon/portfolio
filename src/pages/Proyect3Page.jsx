import { Link } from "react-router-dom";
import proyect3 from "../assets/PurrfectPawtners.png"
import GitHub from "../assets/GitHub.png"
import play from "../assets/play.png"
import "./ProyectPage.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import react from "../assets/React.png"
const Proyect3Page = () => {

    return (
        <div className="proyect">
        
        <h2 className="name">Purrfect pawrtners</h2>

        <p className="description">In this project, there are two distinct deployments: One for the backend and API, and another using React for the frontend. The goal is to create an application specifically designed for cat adoption.</p>
        <div className="use">
                        <img className="devIcons" src={html} alt="html" />
                        <img className="devIcons" src={css} alt="css" />
                        <img className="devIcons" src={JS} alt="JS" />
                        <img className="devIcons" src={node} alt="node" />
                        <img className="devIcons" src={react} alt="react" />
                        <img className="devIcons" src={mongo} alt="mongo" />
                    </div>
        <img className="proyectPhoto" src={proyect3} alt="Purrfect Pawrtners" />

        <div className="links">
        <a  href="https://legendary-tanuki-442740.netlify.app/" target="_blank"><img className="linkIcons" src={play} alt="demo" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/Proyect3-front" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/Proyect3-back" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        </div>
        
        <Link to="/">
            <button className="backBtn">Back</button>
        </Link>
        </div>
    )
}

export default Proyect3Page;