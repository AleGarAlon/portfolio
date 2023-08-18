import portrait from "../assets/portrait.jpg"
import linkedin from "../assets/linkedin.png"
import GitHub from "../assets/GitHub.png"
import email from "../assets/email.png"
import resume from "../assets/resume.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import mongo from "../assets/mongo.png"
import Assault from "../assets/AssaultCard.png"
import HomeboundExplorers from "../assets/HomeboundExplorersCard.png"
import PurrfectPawtners from "../assets/PurrfectPawtnersCard.png"
import "./HomePage.css";
import { Link } from "react-router-dom"




const AboutMePage = () => {


    return (
        <div className="aboutMe">
            <h1 className="title">Alejandro.</h1>
            <div className ="infoBox">
                <div className="myInfo">
                    <p>My name is Alejandro García and I'm from Badajoz, Spain. Throughout all my years of work experience, I've been employed as an occupational therapist in a multidisciplinary team that provides care for children with special needs.</p> <br />
                    <p>Now, with two young children of my own, I've felt the desire to change my professional path. For this reason, I've decided to become a web developer with the goal of growing professionally and exploring a new range of job opportunities.</p><br />
                    <p>I'm excited about acquiring new skills, contributing to projects, and facing new challenges.</p><br />
                    <div className="webDev">
                        <img className="devIcons" src={html} alt="html" />
                        <img className="devIcons" src={css} alt="css" />
                        <img className="devIcons" src={JS} alt="JS" />
                        <img className="devIcons" src={node} alt="node" />
                        <img className="devIcons" src={react} alt="react" />
                        <img className="devIcons" src={mongo} alt="mongo" />
                    </div>
                </div>
            <img className="portrait" src={portrait} alt="Portrait" />
            </div>
            
            <div className="contact">
                <p>alegaralon@gmail.com</p>
                <a href=""><img  className="social"src={email} alt="alegaralon@gmail.com" /></a>
                <a href="https://drive.google.com/file/d/1yocQM_sTb3XUYJ173wDH8p6ArvXUNNoJ/view?usp=drive_link" target="_blank"><img  className="social"src={resume} alt="resume" /></a>
                <a href="https://www.linkedin.com/in/alegaralon/" target="_blank"><img  className="social"src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/AleGarAlon" target="_blank"><img  className="social"src={GitHub} alt="GitHub" /></a>
            </div>

            <h2 className="subTitle">Proyects</h2>

            <div className="proyects">
                <Link to="/proyect1">
                <img className="proyectImg" src={Assault} alt="Assault" />
                </Link>

                <Link to="/proyect2">
                <img className="proyectImg" src={HomeboundExplorers} alt="HomeboundExplorers" />
                </Link>

                <Link to="/proyect3">
                <img className="proyectImg" src={PurrfectPawtners} alt="PurrfectPawtners" />
                </Link>
            </div>
            
            
        </div>
    )
}

export default AboutMePage;