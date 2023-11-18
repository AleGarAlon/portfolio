import { Link } from "react-router-dom";
import proyect4 from "../assets/LastPath.png";
import GitHub from "../assets/GitHub.png";
import play from "../assets/play.png";
import "./ProyectPage.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import JS from "../assets/JS.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import react from "../assets/React.png";
const Proyect4Page = () => {
  return (
    <div className="proyect">
      <h2 className="name">Last path</h2>

      <p className="description">
        This is the project I am currently working on. It is a browser RPG game
        created with the MERN stack. In the game, you can have a character,
        level up your attributes, buy and sell items from the store, and fight
        against NPCs. For now, is styled for mobile phones.
      </p>
      <div className="use">
        <img className="devIcons" src={html} alt="html" />
        <img className="devIcons" src={css} alt="css" />
        <img className="devIcons" src={JS} alt="JS" />
        <img className="devIcons" src={node} alt="node" />
        <img className="devIcons" src={react} alt="react" />
        <img className="devIcons" src={mongo} alt="mongo" />
      </div>

      <a
        href="https://glittering-croissant-459f10.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="proyectPhoto" src={proyect4} alt="LastPath" />
      </a>

      <div className="links">
        <a
          href="https://glittering-croissant-459f10.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkIcons" src={play} alt="demo" />
        </a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a
          href="https://github.com/AleGarAlon/gameClient"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkIcons" src={GitHub} alt="github" />
        </a>
        <div className="linkIcons"></div>
        <div className="linkIcons"></div>
        <a
          href="https://github.com/AleGarAlon/gameServer"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkIcons" src={GitHub} alt="github" />
        </a>
      </div>

      <Link to="/">
        <button className="backBtn">Back</button>
      </Link>
    </div>
  );
};

export default Proyect4Page;
