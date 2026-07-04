import './Navbar.css'
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, EMAIL } from '../../constants'

const navLinks = [
  { label: 'Home',     href: '#welcome' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'GitHub',  href: GITHUB_URL, target: '_blank' },
  { label: 'LinkedIn',href: LINKEDIN_URL, target: '_blank' },
  { label: 'Resume',  href: RESUME_URL, target: '_blank' },
  { label: 'E-mail',  href: `mailto:${EMAIL}` },
]

const badges = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express',
  'Python', 'Git', 'REST API', 'Redux', 'SQL',
]

function AnimatedCatButton() {
  return (
    <div className="cat-button-viewport">
      {/* Star obstacle for cat to leap over */}
      <span className="cat-button-obstacle">✦</span>

      {/* Animated SVG Pixel Cat */}
      <svg className="cat-runner" viewBox="0 0 28 20">
        <path className="cat-tail" d="M22,10 Q26,6 24,2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="8" y="8" width="12" height="7" rx="2" fill="currentColor" />
        <circle cx="7" cy="7" r="4" fill="currentColor" />
        <polygon points="4,4 6,1 7,4" fill="currentColor" />
        <polygon points="7,4 8,1 10,4" fill="currentColor" />
        <circle cx="6" cy="6" r="0.6" fill="#0d0d1a" />
        <line className="cat-leg leg-f1" x1="10" y1="15" x2="9" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line className="cat-leg leg-f2" x1="12" y1="15" x2="13" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line className="cat-leg leg-b1" x1="16" y1="15" x2="15" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line className="cat-leg leg-b2" x1="18" y1="15" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function ForzaHorizonBadge() {
  return (
    <div className="forza-badge-viewport">
      {/* Sunset Background */}
      <div className="forza-sunset" />
      
      {/* Scrolling Highway / Grid */}
      <div className="forza-highway-grid" />

      {/* Forza Horizon Logo/Text overlay */}
      <div className="forza-logo-text">HORIZON</div>

      {/* Animated SVG Sports Car */}
      <svg className="forza-car" viewBox="0 0 32 16">
        <path d="M4 11 L6 6 L12 5 L22 5 L28 8 L30 11 Z" fill="#ff2255" />
        <path d="M12 6 L19 6 L21 8 L12 8 Z" fill="#000" opacity="0.7" />
        <path d="M3 8 L6 8 L5 6 Z" fill="#111" />
        <polygon points="28,9 30,9 29,10" fill="#ffffaa" />
        <circle cx="9" cy="11" r="2.5" fill="#111" stroke="#444" strokeWidth="0.8" />
        <circle cx="23" cy="11" r="2.5" fill="#111" stroke="#444" strokeWidth="0.8" />
        <circle cx="9" cy="11" r="1" fill="#fff" />
        <circle cx="23" cy="11" r="1" fill="#fff" />
      </svg>
    </div>
  )
}

function Sidebar() {
  return (
    <>
      {/* Navigation Box */}
      <div className="box" id="linksdiv">
        <div className="box-title">✦ Navigation</div>
        {navLinks.map(({ label, href, target }) => (
          <a
            key={label}
            className="nav-link"
            href={href}
            target={target || undefined}
            rel={target ? 'noopener noreferrer' : undefined}
            id={`nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            ✩ {label}
          </a>
        ))}
      </div>

      {/* Status Box */}
      <div className="box centerbox">
        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>I&apos;m currently</span>
        <div style={{ marginTop: 4 }}>
          <span className="status-dot" />
          <span className="status-online">Available!</span>
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 6 }}>
          Open to opportunities
        </div>
      </div>

      {/* Quick Facts */}
      <div className="box">
        <div className="box-title" style={{ fontSize: 16 }}>☾ Quick Facts</div>
        <ul style={{ fontSize: 12, lineHeight: 1.7 }}>
          <li>→ Full-Stack Developer</li>
          <li>→ MERN Stack specialist</li>
          <li>→ TypeScript enthusiast</li>
          <li>→ CS student from Kerala</li>
          <li>→ Open-source curious</li>
          <li>→ LeetCode grinder 🧩</li>
        </ul>
      </div>

      {/* Socials */}
      <div className="box">
        <div className="box-title" style={{ fontSize: 16 }}>☾ Socials</div>
        <a
          className="nav-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="sidebar-github"
        >⌥ GitHub</a>
        <a
          className="nav-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="sidebar-linkedin"
        >⌥ LinkedIn</a>
        <a
          className="nav-link"
          href={`mailto:${EMAIL}`}
          id="sidebar-email"
        >⌥ E-mail</a>
      </div>

      {/* Tech Badges Marquee */}
      <div className="box" style={{ padding: '8px 0' }}>
        <div className="box-title" style={{ fontSize: 14, padding: '0 14px 6px' }}>☾ Tech Stack</div>
        <div className="marquee-wrap">
          <marquee
            scrollAmount="2"
            onMouseOver={e => e.target.stop()}
            onMouseOut={e => e.target.start()}
            aria-label="Tech stack badges"
          >
            {badges.map(b => (
              <span key={b} className="badge-btn">{b}</span>
            ))}
          </marquee>
        </div>
      </div>

      {/* My Button */}
      <div className="box centerbox" style={{ textAlign: 'center', padding: '10px 0', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <AnimatedCatButton />
        <ForzaHorizonBadge />
      </div>

      {/* Webring-style bar */}
      <div className="box centerbox" style={{ fontSize: 11, textAlign: 'center', padding: '8px 6px' }}>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)', fontSize: 10 }}
        >
          ← Explore my work →
        </a>
      </div>
    </>
  )
}

export default Sidebar