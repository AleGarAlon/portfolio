import { Link } from "react-router-dom";
import proyect2 from "../assets/HomeboundExplorers.png"
import GitHub from "../assets/GitHub.png"
import play from "../assets/play.png"
import "./ProyectPage.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
const Proyect2Page = () => {

    return (
        <div className="proyect">
        
        <h2 className="name">Homebound Explorers</h2>

        <p className="description">This proyect is a webpage that offers activities to do with kids depending on their age.</p>
        <div className="use">
                        <img className="devIcons" src={html} alt="html" />
                        <img className="devIcons" src={css} alt="css" />
                        <img className="devIcons" src={JS} alt="JS" />
                        <img className="devIcons" src={node} alt="node" />
                        <img className="devIcons" src={mongo} alt="mongo" />
                    </div>
        <img className="proyectPhoto" src={proyect2} alt="HomeboundExplorers" />
        
        <div className="links">
        <a  href="https://homeboundexplorers.adaptable.app/" target="_blank"><img className="linkIcons" src={play} alt="demo" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/Module2-Proyect" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        </div>

        <Link to="/">
            <button className="backBtn">Back</button>
        </Link>
        </div>
    )
}


export default Proyect2Page;