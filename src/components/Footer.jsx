import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare , faTwitterSquare, faFacebookSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){

    return(
        <div>
            <footer className="social-icons">
                <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
                <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                <FontAwesomeIcon icon={faInstagramSquare} className="icon"/>
                <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
            </footer>

        </div>
    )
}