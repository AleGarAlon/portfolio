import portrait from "../assets/portrait.jpg"
import linkedin from "../assets/linkedin.png"
import GitHub from "../assets/GitHub.png"
import email from "../assets/email.png"
import resume from "../assets/resume.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import react from "../assets/React.png"
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
                <p>My name is Alejandro and I'm from Extremadura, Spain. Throughout my years of work experience I've worked as an occupational therapist in a multidisciplinary team providing care for children with special needs.</p><br />
                <p>However, I now aspire to change my professional path and explore new horizons. This is why I've decided to transition into web development, with the goal of unleashing my creativity, exploring a diverse range of job opportunities, and experiencing personal as well as professional growth.</p><br />
                <p>I'm enthusiastic about acquiring new skills, contributing to projects, and facing new challenges.</p><br />
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
                <a href=""><img  className="social email"src={email} alt="alegaralon@gmail.com" /></a>
                <a href="https://drive.google.com/file/d/1Fgn2nk4RrcdUo1_X0GF2EkAioL5KKJPR/view?usp=drive_link" target="_blank"><img  className="social"src={resume} alt="resume" /></a>
                <a href="https://www.linkedin.com/in/alegaralon/" target="_blank"><img  className="social"src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/AleGarAlon" target="_blank"><img  className="social"src={GitHub} alt="GitHub" /></a>
            </div>

            <h2 className="subTitle">Proyects</h2>

            <div className="proyects">
                <Link className="linkR" to="/proyect1">
                <img className="proyectImg" src={Assault} alt="Assault" />
                <div className = "overlay">
                    <p>Assault on Somnium Stars</p>
                </div>
                </Link>

                <Link className="linkR" to="/proyect2">
                <img className="proyectImg" src={HomeboundExplorers} alt="HomeboundExplorers" />
                <div className = "overlay">
                    <p>Homebound Explorers</p>
                </div>
                </Link>

                <Link className="linkR" to="/proyect3">
                <img className="proyectImg" src={PurrfectPawtners} alt="PurrfectPawtners" />
                <div className = "overlay">
                    <p>Purrfect Pawtners</p>
                </div>
                </Link>
            </div>
            
            
        </div>
    )
}

export default AboutMePage;