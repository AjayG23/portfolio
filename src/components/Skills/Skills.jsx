import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Skills() {
    return(
        <div className="container">
            <div className="row">
                <div className="skill-header" id='skills'>
                    <h3>Skills</h3>
                </div>
            </div>
            <div className="row">
                <h3 className='prog-lang-header'>Programming Languages</h3>
                <div className="prog-langs">
                    <div className="cards">
                        <h5>JavaScript</h5>
                    </div>
                    <div className="cards">
                        <h5>Java</h5>
                    </div>
                    <div className="cards">
                        <h5>Python</h5>
                    </div>
                    <div className="cards">
                        <h5>C</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className='prog-lang-header'>Frontend Technologies</h3>
                <div className="prog-langs">
                    <div className="cards ">
                        <h5>HTML</h5>
                    </div>
                    <div className="cards">
                        <h5>CSS</h5>
                    </div>
                    <div className="cards">
                        <h5>ReactJS</h5>
                    </div>
                    <div className="cards">
                        <h5>Bootstrap</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className='prog-lang-header'>Backend Technologies</h3>
                <div className="prog-langs">
                    <div className="cards">
                        <h5>NodeJS</h5>
                    </div>
                    <div className="cards">
                        <h5>ExpressJS</h5>
                    </div>
                    <div className="cards">
                        <h5>Php</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className='prog-lang-header'>Databases</h3>
                <div className="prog-langs">
                    <div className="cards">
                        <h5>SQL</h5>
                    </div>
                    <div className="cards">
                        <h5>MongoDB</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className='prog-lang-header'>Miscellaneous</h3>
                <div className="prog-langs">
                    <div className="cards">
                        <h5>Git</h5>
                    </div>
                    <div className="cards">
                        <h5>REST APIs</h5>
                    </div>
                    <div className="cards">
                        <h5>WebSocket</h5>
                    </div>
                    <div className="cards">
                        <h5>Numpy</h5>
                    </div>
                    <div className="cards">
                        <h5>Pandas</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills