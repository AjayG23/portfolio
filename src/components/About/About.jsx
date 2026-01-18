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
                    <p className='about-me-p'>Software Engineer with a focus on full-stack development and architectural ownership. Experienced in building high-performance interactive engines using the MERN stack, TypeScript, and Redux. Proven ability to drive technical roadmaps and deliver enterprise-grade, type-safe solutions with high autonomy.
                    </p>
                </div>
                <div className="col-lg-4 past">
                    <h5 className='about-me-h5'>Future</h5>
                    <p className='about-me-p'>In the future, I aim to strengthen my engineering skills by working on scalable and efficient systems and gathering experiences. I have recently started solving problems on LeetCode to improve my problem-solving and algorithmic thinking. My goal is to be an efficient engineer role where I can contribute to innovative projects, stay updated with emerging technologies, and continuously grow in my field.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About