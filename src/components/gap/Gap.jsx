import './Gap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
function Gap(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 svg-container">
                <FontAwesomeIcon icon={faComputerMouse} className='mouse' onClick={() => scrollToSection('about')}/><br />
                <FontAwesomeIcon icon={faAnglesDown} className='arrow' />
                </div>
            </div>
        </div>
    )
}
export default Gap