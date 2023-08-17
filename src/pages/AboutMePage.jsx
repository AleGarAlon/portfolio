import portrait from "../assets/portrait.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import linkedin from "../assets/linkedin.png"
import GitHub from "../assets/GitHub.png"
import { faFile } from '@fortawesome/free-solid-svg-icons'
import "./AboutMePage.css";
import { Link } from "react-router-dom"
import { useState } from "react"


const AboutMePage = () => {
const [email,  setEmail] = useState(null)

    return (
        <div id="aboutMe">
            <h1>About me</h1>
            <div id ="infoBox">
                <div id="myInfo">
                    <p>My name is Alejandro García and I'm from Badajoz, Spain. Throughout all my years of work experience, I've been employed as an occupational therapist in a multidisciplinary team that provides care for children with special needs.</p> <br />
                    <p>Now, with two young children of my own, I've felt the desire to change my professional path. For this reason, I've decided to become a web developer with the goal of growing professionally and exploring a new range of job opportunities.</p><br />
                    <p>I'm excited about acquiring new skills, contributing to projects, and facing new challenges</p><br />
                </div>
            <img src={portrait} alt="Portrait" />
            </div>
            <div id="imgContact">
                <p className="icons fontAw"><FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#111213",}}/></p>
                <a href="https://drive.google.com/file/d/1yocQM_sTb3XUYJ173wDH8p6ArvXUNNoJ/view?usp=drive_link"><p className="icons fontAw"><FontAwesomeIcon icon={faFile} size="2xl" style={{color: "#111213",}} /></p></a>
                <a href="https://www.linkedin.com/in/alegaralon/"><img  className="icons social"src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/AleGarAlon"><img  className="icons social"src={GitHub} alt="GitHub" /></a>
            </div>
            <Link to="/">
            <button id="back">{"<=(goBack)"}</button>
            </Link>
        </div>
    )
}

export default AboutMePage;