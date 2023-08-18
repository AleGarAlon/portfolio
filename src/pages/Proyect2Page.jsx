import { Link } from "react-router-dom";
import proyect2 from "../assets/HomeboundExplorers.png"
import GitHub from "../assets/GitHub.png"
import play from "../assets/play.png"
import "./ProyectPage.css"
const Proyect2Page = () => {

    return (
        <div className="proyect">
        
        <h2 className="name">Homebound Explorers</h2>

        <p className="description">This proyect is a webpage that offers Activiries to do with kids depending on their age</p>
        <img className="proyectPhoto" src={proyect2} alt="HomeboundExplorers" />
        
        <div className="links">
        <a  href="https://homeboundexplorers.adaptable.app/" target="_blank"><img className="linkIcons" src={play} alt="demo" /></a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a  href="https://github.com/AleGarAlon/Module2-Proyect" target="_blank"><img className="linkIcons" src={GitHub} alt="github" /></a>
        </div>

        <Link to="/">
            <button className="backBtn">{"<=(goBack)"}</button>
        </Link>
        </div>
    )
}


export default Proyect2Page;