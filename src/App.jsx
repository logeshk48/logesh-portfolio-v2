import './App.css'
import ProfileCard from './ProfileCard'
import logeshImg from './assets/logesh.jpg'
import TechStack from './components/TechStack/TechStack'

function App() {
  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="logo-wrap">
          <div className="logo-dot"></div>
          <div className="logo">LOGESH</div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">Let’s Talk</a>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-tag">AI POWERED WEB DEVELOPER</p>

              <h1>
                Building modern,
                <span> premium web experiences</span>
              </h1>

              <p className="hero-description">
                I’m Logesh — crafting clean, modern, and powerful web experiences with a
                focus on performance, design, and real-world impact.
              </p>
            </div>

            <div className="hero-right">
              <ProfileCard
                name="Logesh"
                title="AI Powered Web Developer"
                handle="logesh.dev"
                status="Available"
                contactText="Contact Me"
                avatarUrl={logeshImg}
              />
            </div>
          </div>
        </section>
        <TechStack />
      </main>
    </div>
  )
}

export default App