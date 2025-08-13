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
                            <p>I’m a passionate Web Developer based in Kerala, India, with a Master’s degree in Computer Applications.
                                Alongside my studies, I have earned certifications in Web Development, Cloud Computing, Data Analytics, and other domains.
                                I’m now actively seeking opportunities in the tech field to apply my skills, contribute to impactful projects, and continue growing as a developer
                            </p>
                        </div>
                        <div className="line-5">
                        <a href="https://drive.google.com/file/d/1H6SRJMCg_BZqMVD1H9guDobFebcudhxM/view" target="_blank" rel="noopener noreferrer">
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