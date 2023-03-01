import React from "react";
import profile_pic from "../assets/IMG_7486.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return(

        <div>
            <header className="info">
                <img className="profile_pic" src={profile_pic} alt=""></img>
                <h1 className="name_title">Andres Chinchilla</h1>
                <p className="job_title">Frontend Developer</p>
                <p className="site_name">andreschinchilla.website</p>
                <div className="center">
                    <a href = "mailto: andreschinchilla08@gmail.com" className="email"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                    <a href = "https://www.linkedin.com/in/andres-chinchilla-474655178/" className="linkedin"> <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                </div>           
            </header>
        </div>
    )
}