import './Footer.css'
import { GITHUB_URL, LINKEDIN_URL, EMAIL, RESUME_URL } from '../../constants'

function SiteFooter() {
  return (
    <footer id="site-footer">
      <div className="footer-socials">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="footer-github"
        >
          GitHub
        </a>
        <span className="footer-sep">·</span>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="footer-linkedin"
        >
          LinkedIn
        </a>
        <span className="footer-sep">·</span>
        <a
          href={`mailto:${EMAIL}`}
          id="footer-email"
        >
          E-mail
        </a>
        <span className="footer-sep">·</span>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="footer-resume"
        >
          Resume
        </a>
      </div>
      <div className="footer-copy">
        (c) 2025–{new Date().getFullYear()} Ajay G. All Rights Reserved.
      </div>
    </footer>
  )
}

export default SiteFooter