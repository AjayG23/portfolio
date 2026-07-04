import { useEffect, useRef } from 'react'
import Sidebar from './components/Navbar/Navbar'
import WelcomeBox from './components/Hero/Hero'
import AboutBox from './components/About/About'
import SkillsBox from './components/Skills/Skills'
import SiteFooter from './components/Footer/Footer'
import './index.css'

function RainCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 1 + Math.random() * 2.5,
      length: 8 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drops.forEach(d => {
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 1, d.y + d.length)
        ctx.strokeStyle = `rgba(100, 140, 200, ${d.opacity})`
        ctx.lineWidth = 0.8
        ctx.stroke()
        d.y += d.speed
        if (d.y > canvas.height + 30) {
          d.y = -d.length
          d.x = Math.random() * canvas.width
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas id="rain-canvas" ref={canvasRef} aria-hidden="true" />
}

function App() {
  const toggleMenu = () => {
    document.body.classList.toggle('menu-open')
  }
  const closeMenu = () => {
    document.body.classList.remove('menu-open')
  }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') closeMenu() }
    const onResize = () => { if (window.innerWidth > 768) closeMenu() }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Animate favicon to match title blinking & color shift
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')

    const colors = ['#e0d0a0', '#ff90d0', '#90d0ff', '#44ff88']
    let colorIndex = 0
    let step = 0
    let angle = 0

    const updateFavicon = () => {
      ctx.clearRect(0, 0, 32, 32)

      // Color shift step
      step += 1
      if (step % 20 === 0) {
        colorIndex = (colorIndex + 1) % colors.length
      }

      // Rotate star
      angle += 0.12

      // Random flickering simulation
      const isFlickering = Math.random() < 0.08
      const opacity = isFlickering ? 0.25 : 1.0
      const currentColor = colors[colorIndex]

      ctx.save()
      ctx.globalAlpha = opacity

      // Rotate around center (16, 16)
      ctx.translate(16, 16)
      ctx.rotate(angle)
      ctx.translate(-16, -16)

      // Draw the neon star
      ctx.beginPath()
      ctx.moveTo(16, 2)
      ctx.quadraticCurveTo(16, 16, 30, 16)
      ctx.quadraticCurveTo(16, 16, 16, 30)
      ctx.quadraticCurveTo(16, 16, 2, 16)
      ctx.quadraticCurveTo(16, 16, 16, 2)
      ctx.closePath()

      // Glow effect
      ctx.shadowBlur = 6
      ctx.shadowColor = currentColor
      ctx.fillStyle = currentColor
      ctx.fill()
      ctx.restore()

      // Force browser to redraw favicon in browser tab
      const oldLink = document.getElementById('favicon')
      const newLink = document.createElement('link')
      newLink.id = 'favicon'
      newLink.rel = 'icon'
      newLink.type = 'image/png'
      newLink.href = canvas.toDataURL('image/png')

      if (oldLink) {
        document.head.removeChild(oldLink)
      }
      document.head.appendChild(newLink)
    }

    const interval = setInterval(updateFavicon, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <RainCanvas />

      <button
        id="mobile-menu-toggle"
        type="button"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        MENU
      </button>

      <div
        id="mobile-backdrop"
        onClick={closeMenu}
        role="presentation"
      />
      <div id="site-wrapper">
        <header id="site-header">
          <a href="#welcome" id="site-title">
            <span className="star-blink">✦</span>{' '}
            <span className="title-letter title-a">A</span>
            <span className="title-letter title-j">J</span>
            <span className="title-letter title-a2">A</span>
            <span className="title-letter title-y">Y</span>
            <span className="title-dot">.</span>
            <span className="title-letter title-d">D</span>
            <span className="title-letter title-e">E</span>
            <span className="title-letter title-v">V</span>{' '}
            <span className="star-blink">✦</span>
          </a>
        </header>

        <div id="main-layout">
          {/* LEFT — main content */}
          <main id="main-content">
            <WelcomeBox />
            <AboutBox />
            <SkillsBox />
          </main>

          {/* RIGHT — sidebar */}
          <aside id="sidebar">
            <Sidebar />
          </aside>
        </div>

        <SiteFooter />
      </div>
    </>
  )
}

export default App