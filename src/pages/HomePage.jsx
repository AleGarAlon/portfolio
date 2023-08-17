import {Link} from "react-router-dom";
import "./HomePAge.css"

const HomePage = () => {

    return (
        <div id="homePage">
        <h1>Home Page</h1>
        <Link to="/AboutMe"> About me</Link>
        <h3>{"let proyects = ["}</h3>
        <p><Link to="/Proyect1"> Proyect1</Link></p>
        <p><Link to="/Proyect2"> Proyect2</Link></p>
        <p><Link to="/Proyect3"> Proyect3</Link></p>
        <h3>{"]"}</h3> 


        </div>
    )
}

export default HomePage;