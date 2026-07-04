import './Hero.css'
import Self from '../../assets/self.jpeg'
import { RESUME_URL } from '../../constants'

const quickFacts = [
  "I'm a Full-Stack Developer from Kerala, India.",
  'My main stack is the MERN stack (MongoDB, Express, React, Node.js).',
  'I love TypeScript, clean architecture, and building scalable systems.',
  'Currently a Software Engineer.',
  'I conduct technical interviews and lead engineering teams.',
  'I solve problems on LeetCode to sharpen my algorithmic thinking.',
  'I code websites, APIs, bots and everything in between.',
  "Feel free to reach out — let's build something cool! 🚀",
]

function WelcomeBox() {
  return (
    <section id="welcome">
      {/* Main welcome card */}
      <div className="box" id="mainbox">
        <div className="box-title">
          <span className="moon-icon">☾</span>
          Welcome to AJAY.DEV!
        </div>

        <div className="welcome-inner">
          <div className="welcome-photo-wrap">
            <img
              src={Self}
              alt="Ajay G"
              className="welcome-photo"
              id="hero-avatar"
            />
            <div className="photo-caption">Ajay G</div>
          </div>

          <div className="welcome-text">
            <p>
              This is my li<i>t</i>tle corner of the internet — a portfolio and
              showcase of my work. I&apos;m quite obviously a <i>p</i>rogrammer.
            </p>
            <p>
              I code full-stack web apps, REST APIs, and explore new
              technologies when I feel like it. You can read more about me{' '}
              <a href="#about">here</a>!
            </p>

            <span style={{ color: 'var(--text-bright)', fontSize: 13 }}>
              Some quick facts:<br />
            </span>
            <ul className="quick-facts-list">
              {quickFacts.map((f, i) => (
                <li key={i}>
                  <span className="blog-arrow">→</span> {f}
                </li>
              ))}
            </ul>

             <div className="hero-actions">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn"
                id="hero-resume-btn"
              >
                [ Get Resume ]
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="marquee-wrap" style={{ marginBottom: 10 }}>
        <marquee
          scrollAmount="3"
          onMouseOver={e => e.target.stop()}
          onMouseOut={e => e.target.start()}
          aria-label="Scrolling tech info"
        >
          <span style={{ color: 'var(--text-bright)' }}>
            🌙 AJAY G &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; MERN
            Stack &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; React &nbsp;·&nbsp;
            Node.js &nbsp;·&nbsp; MongoDB &nbsp;·&nbsp; Python &nbsp;·&nbsp;
            Open to opportunities &nbsp;·&nbsp; Let&apos;s build something amazing!
            &nbsp;·&nbsp;
          </span>
        </marquee>
      </div>
    </section>
  )
}

export default WelcomeBox