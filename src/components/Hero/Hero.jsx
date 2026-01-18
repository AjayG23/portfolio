import './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Self from '../../assets/self.jpeg'

function Hero() {
    return(
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="line-1">
                            <h5>Hello! I am</h5>
                        </div>
                        <div className="line-2">
                            <h5>Ajay G</h5>
                        </div>
                        <div className="line-3">
                            <h5>Web Developer</h5>
                        </div>
                        <div className="line-4">
                            <p>Software Engineer Intern with full-stack expertise, skilled in React, TypeScript, Redux, and REST APIs on the frontend, Node.js/Express on the backend and Git for version control. Experienced with databases such as MongoDB and SQL, delivering clean and scalable end-to-end solutions.
                            </p>
                        </div>
                        <div className="line-5">
                        <a href="https://drive.google.com/file/d/1TRp_CfFI9cOgclrKUM2omf1TJNv5AD3d/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="resume-button">Get Resume</button>
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="image">
                        <img src={Self} alt="" className='self'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero