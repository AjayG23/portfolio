import './Projects.css'
import FixeasyImg from '../../assets/fixeasy.png'
import SneakyImg from '../../assets/sneaky.png'
import MercadoImg from '../../assets/mercado.png'

const projects = [
  {
    name: 'FixEasy',
    href: null,
    img: FixeasyImg,
    stack: 'Node.js · Express.js · MongoDB · React.js',
    desc: 'A three-tier service platform connecting users with skilled technicians (electricians, plumbers, mechanics). Features seamless booking, real-time availability, and admin monitoring for efficient service management.',
    status: 'Planning Phase',
  },
  {
    name: 'Sneaky',
    href: 'https://github.com/AjayG23/sneaky',
    img: SneakyImg,
    stack: 'Node.js · Express.js · MongoDB · EJS · Bootstrap · AJAX',
    desc: 'A feature-rich e-commerce platform designed for sneaker enthusiasts — browse a wide range of sneakers, add to cart, and complete purchases seamlessly.',
  },
  {
    name: 'Mercado',
    href: 'https://github.com/AjayG23/MERCADO',
    img: MercadoImg,
    stack: 'HTML · CSS · Bootstrap · AJAX · PHP · MySQL',
    desc: "An e-commerce platform for selling Kudumbasree products — a poverty eradication scheme by the Kerala Government supporting women's entrepreneurship.",
  },
]

function ProjectsBox() {
  return (
    <section id="projects">
      <div className="box">
        <div className="box-title">
          <span className="moon-icon">☾</span>
          Projects
        </div>

        {projects.map(({ name, href, img, stack, desc, status }) => (
          <div key={name} className="project-entry">
            <div className="project-layout">
              <div className="project-img-wrap">
                <img
                  src={img}
                  alt={name}
                  className="project-img"
                />
              </div>
              <div className="project-info">
                {href ? (
                  <a
                    className="project-name"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${name.toLowerCase()}`}
                  >
                    ☾ {name}
                  </a>
                ) : (
                  <div className="project-name">☾ {name}</div>
                )}

                {status && (
                  <span className="project-status">[{status}]</span>
                )}

                <div className="project-stack">Made with: {stack}</div>
                <p style={{ fontSize: 12.5, margin: 0 }}>{desc}</p>

                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn"
                    style={{ marginTop: 8, display: 'inline-block' }}
                    id={`project-${name.toLowerCase()}-link`}
                  >
                    [ GitHub Repo ]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Other small projects */}
        <div style={{ marginTop: 6 }}>
          <b style={{ color: 'var(--text-bright)', fontSize: 13 }}>✧ Also worth checking out:</b>
          <div style={{ marginTop: 6, fontSize: 12.5, lineHeight: 2 }}>
            <span className="blog-arrow">✩</span>{' '}
            <a href="https://github.com/AjayG23" target="_blank" rel="noopener noreferrer">
              More on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBox