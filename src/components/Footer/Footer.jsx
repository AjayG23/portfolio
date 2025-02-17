import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function Footer() {
    return(
        <div className="container socials-container" id='contact'>
            <div className="socials">
                    <a href="mailto:jayvishnu89@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <a href="https://github.com/AjayG23" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ajay-g23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1fr-v4p5GqFddH48WgW53ypV4ey1jEops/view?usp=drive_link"target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="arrow-up">
                <FontAwesomeIcon icon={faAnglesUp} className='arrow' onClick={() => scrollToSection('navbar')}/>
            </div>
            <div className="copyright">
                <h5>© 2025 Ajay G. All Rights Reserved</h5>
            </div>
        </div>
    )
}
export default Footer