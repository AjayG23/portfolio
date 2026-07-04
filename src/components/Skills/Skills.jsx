import './Skills.css'

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'WebSocket'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    category: 'Tools & Misc',
    skills: ['Git', 'GitHub', 'NumPy', 'Pandas', 'Vite', 'AJAX'],
  },
]

function SkillsBox() {
  return (
    <section id="skills">
      <div className="box">
        <div className="box-title">
          <span className="moon-icon">☾</span>
          Skills
        </div>

        {skillGroups.map(({ category, skills }) => (
          <div key={category} className="skill-group">
            <div className="skill-category">
              <span className="blog-arrow">→</span> {category}
            </div>
            <div className="tag-list">
              {skills.map(skill => (
                <span key={skill} className="tag" title={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsBox