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
                            <h5>Web Developer • Student</h5>
                        </div>
                        <div className="line-4">
                            <p>I'm a passionate Web Developer based on Kerala, India, currently pursuing Master's in Computer Applications.
                                Alongside my studies, I have done certifications on Web Development, Cloud Computing, Data Analytics and others.
                                I'm currently looking for opportunities in Tech Field to showcase my skills.
                            </p>
                        </div>
                        <div className="line-5">
                        <a href="https://drive.google.com/file/d/1fr-v4p5GqFddH48WgW53ypV4ey1jEops/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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