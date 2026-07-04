import './About.css'

const sections = [
  {
    label: 'Past',
    icon: '→',
    text: `I've been around computers since 2011 when my dad brought home a PC. Gaming sparked my curiosity about hardware and software. In 2018 during 11th grade I discovered programming — starting with Java. Entering college, I shifted to web development and never looked back.`,
  },
  {
    label: 'Present',
    icon: '→',
    text: `Software Engineer with a focus on full-stack development and architectural ownership. Building high-performance interactive applications using the MERN stack, TypeScript, and Redux. Proven ability to drive technical roadmaps and deliver enterprise-grade, type-safe solutions with high autonomy.`,
  },
  {
    label: 'Future',
    icon: '→',
    text: `Aiming to strengthen my engineering skills by working on scalable, efficient systems. Recently started solving problems on LeetCode to sharpen algorithmic thinking. Goal: an impactful engineering role where I contribute to innovative projects and continuously grow in my field.`,
  },
]

function AboutBox() {
  return (
    <section id="about">
      <div className="box">
        <div className="box-title">
          <span className="moon-icon">☾</span>
          About Me
        </div>

        {sections.map(({ label, icon, text }) => (
          <div key={label} className="about-section">
            <div className="about-section-title">
              <span className="blog-arrow">{icon}</span>
              <b>{label}</b>
            </div>
            <p className="about-section-text">{text}</p>
          </div>
        ))}

        {/* Hire me blurb */}
        <div className="hire-blurb">
          <b style={{ color: 'var(--moon)' }}>✧ Looking to hire a developer?</b>
          <p style={{ marginTop: 4, fontSize: 12.5 }}>
            I&apos;m always open to exciting opportunities where I can apply my
            skills in backend development, web applications, and problem-solving.
            If you&apos;re looking for a dedicated developer, feel free to{' '}
            <a href="mailto:ajaygwork23@gmail.com">reach out</a>!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutBox