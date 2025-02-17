import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
    return(
        <div className="container" id='about'>
            <div className="about-title">
                <h3>About my</h3>
            </div>
            <div className="row">
                <div className="col-lg-4 past">
                    <h5 className='about-me-h5'>Past</h5>
                    <p className='about-me-p'>I have been engaged with computers since 2011 when my dad brought home a PC. Gaming ignited my curiosity about hardware and software, deepening my technical understanding. In 2018, during 11th grade, I discovered programming, starting with Java. Entering college, I shifted to web development, broadening my skills.
                    </p>
                </div>
                <div className="col-lg-4 past">
                    <h5 className='about-me-h5'>Present</h5>
                    <p className='about-me-p'>I am currently pursuing my Master’s in Computer Applications while actively honing my programming skills. I have a strong preference for backend development over frontend and enjoy working on server-side logic and architecture. Now, I am seeking a developer position where I can apply my skills, contribute to impactful projects, and continue growing as a software developer.
                    </p>
                </div>
                <div className="col-lg-4 past">
                    <h5 className='about-me-h5'>Future</h5>
                    <p className='about-me-p'>In the future, I aim to strengthen my backend development skills by working on scalable and efficient systems. I have recently started solving problems on LeetCode to improve my problem-solving and algorithmic thinking. My goal is to secure a developer role where I can contribute to innovative projects, stay updated with emerging technologies, and continuously grow in my field.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About