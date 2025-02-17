import './Projects.css'
import SneakyImg from '../../assets/sneaky.png'
import MercadoImg from '../../assets/mercado.png'
import FixeasyImg from '../../assets/fixeasy.png'

function redirectToMercado(){
    window.open('https://github.com/AjayG23/MERCADO',"_blank")
}
function redirectToSneaky(){
    window.open('https://github.com/AjayG23/sneaky',"_blank")
}
function Projects() {
    return(
        <div className="container projects-container" id="projects">
            <div className="projects-header"id="projects">
                <h3>Projects</h3>
            </div>
            <div className="project-1">
                <div className="sneaky-image">
                    <img src={FixeasyImg} alt="" />
                </div>
                <div className="sneaky-desc">
                    <h3>FixEasy</h3>
                    <p>(Ongoing Project)</p>
                    <p>Made With: <span className='tech-stack'>NodeJS, ExpressJS, MongoDB, ReactJS</span></p>
                    <p>FixEasy is a three-tier service platform connecting users with skilled technicians like electricians, plumbers, and mechanics. It offers seamless booking, real-time availability, and admin monitoring for efficient service management.🚀👟</p>
                    {/* <button>GitHub Repo ↗</button> */}
                </div>
            </div>
            <div className="project-1">
                <div className="sneaky-image">
                    <img src={SneakyImg} alt="" />
                </div>
                <div className="sneaky-desc">
                    <h3>Sneaky</h3>
                    <p>Made With: <span className='tech-stack'>NodeJS, ExpressJS, MongoDB, EJS, CSS, Bootstrap, AJAX</span></p>
                    <p>Sneaky is a feature-rich e-commerce platform designed for sneaker enthusiasts, offering a seamless shopping experience. The website allows users to browse a wide range of sneakers, add products to their cart, and complete purchases effortlessly. 🚀👟</p>
                    <button onClick={redirectToSneaky}>GitHub Repo ↗</button>
                </div>
            </div>
            <div className="project-1">
                <div className="sneaky-image">
                    <img src={MercadoImg} alt="" />
                </div>
                <div className="sneaky-desc">
                    <h3>Mercado</h3>
                    <p>Made With: <span className='tech-stack'>HTML, CSS, Bootstrap, Ajax, Php, MySQL</span></p>
                    <p>Mercado is a feature-rich e-commerce platform desinged for selling kudumbasree products. Kudumbasree is a poverty eradication scheme developed by Kerala Government for womens. 🚀👟</p>
                    <button onClick={redirectToMercado}>GitHub Repo ↗</button>
                </div>
            </div>
            
        </div>
    )
}
export default Projects